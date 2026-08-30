export function getRotationStatus(lastWornDate) {
    if (!lastWornDate) {
        return { type: 'danger', text: 'Never Worn', icon: '🔴', badgeClass: 'badge-error' };
    }

    const diffTime = Math.abs(new Date() - new Date(lastWornDate));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 2) {
        return { type: 'good', text: 'Recently Worn', icon: '🟢', badgeClass: 'badge-success' };
    } else if (diffDays <= 6) {
        return { type: 'warning', text: 'Could Wear Again', icon: '🟡', badgeClass: 'badge-warning' };
    } else {
        return { type: 'danger', text: 'Long Time Not Worn', icon: '🔴', badgeClass: 'badge-error' };
    }
}
