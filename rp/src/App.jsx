import { useState, useRef, useEffect } from 'react';
import './index.css';

// Card values for a simple 16-card game (8 pairs)
const CARD_VALUES = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍍', '🥝'];

// Helper function to generate and shuffle the initial deck
function generateDeck() {
  const deck = [...CARD_VALUES, ...CARD_VALUES]
    .sort(() => Math.random() - 0.5)
    .map((value) => ({
      id: crypto.randomUUID(),
      value,
      isFlipped: false,
      isMatched: false,
    }));
  return deck;
}

function App() {
  // 1. Data for rendering (useState)
  const [cards, setCards] = useState(generateDeck());
  const [moves, setMoves] = useState(0);

  // 2. Mutable data for coordination, NOT rendering (useRef)
  const timeoutIdRef = useRef(null);

  // 3. Cleanup effect: clear timeout if component unmounts
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  // 4. Derive the win condition from existing state
  const hasWon = cards.length > 0 && cards.every((card) => card.isMatched);

  const handleCardClick = (clickedCard) => {
    // Prevent clicking if the card is already flipped or matched
    if (clickedCard.isFlipped || clickedCard.isMatched) return;

    // Find cards that are currently flipped but not matched
    const flippedCards = cards.filter((c) => c.isFlipped && !c.isMatched);

    // Prevent clicking if two cards are already flipped (waiting for timeout)
    if (flippedCards.length >= 2) return;

    // 5. Update only the clicked card in the array immutably
    const nextCards = cards.map((card) => {
      if (card.id === clickedCard.id) {
        return { ...card, isFlipped: true };
      }
      return card;
    });

    setCards(nextCards);


    const currentlyFlipped = [...flippedCards, { ...clickedCard, isFlipped: true }];

    if (currentlyFlipped.length === 2) {
      // We have two cards flipped, increment moves
      setMoves((m) => m + 1);

      const [firstCard, secondCard] = currentlyFlipped;

      if (firstCard.value === secondCard.value) {
        // MATCH: mark both as matched
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, isMatched: true };
            }
            return card;
          })
        );
      } else {
        // NO MATCH: flip back after delay
        timeoutIdRef.current = setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => {
              if (card.id === firstCard.id || card.id === secondCard.id) {
                return { ...card, isFlipped: false };
              }
              return card;
            })
          );
          timeoutIdRef.current = null;
        }, 1000);
      }
    }
  };

  const startNewGame = () => {
    // Clear any pending flip-back timeout so it doesn't mess up the new game
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    setCards(generateDeck());
    setMoves(0);
  };

  return (
    <div className="game-container">
      <h1>Memory Match</h1>
      <div className="stats">
        <p>Moves: {moves}</p>
        <button onClick={startNewGame}>New Game</button>
      </div>

      {hasWon && (
        <div className="win-message">
          <h2>You Won! 🎉</h2>
        </div>
      )}

      <div className="grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''} ${
              card.isMatched ? 'matched' : ''
            }`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
