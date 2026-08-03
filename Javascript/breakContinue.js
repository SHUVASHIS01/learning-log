for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i, 'loop');
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop body when i is 5
    }
    console.log(i, 'loop');
}

for (let i = 0; i < 10; i++) {
    if (i%2===0) {
        continue; // Skip the rest of the loop body when i is even
    }
    console.log(i);
}

