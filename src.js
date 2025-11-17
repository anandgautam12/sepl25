function showSection(section) {
    let content = document.getElementById("content");

    const info = {
        reg: `
            <h2>1. Registration & Squad Rules</h2>
            <ul>
                <li>Player Registration Fee: ₹200</li>
                <li>Team Owner Registration Fee: ₹3000</li>
                <li>Minimum Squad Size: 14 Players</li>
                <li>Maximum Squad Size: 16 Players</li>
                <li>Faculty Players: 1 to 5</li>
                <li>Faculty in Playing 11: Max 2</li>
            </ul>
        `,

        icon: `
            <h2>2. Icon Player Rule</h2>
            <ul>
                <li>Each team must select one faculty member as Icon Player.</li>
                <li>Icon Player guides the team in auction.</li>
                <li>Faculty not in teams can also register for auction.</li>
            </ul>
        `,

        play11: `
            <h2>3. Playing 11 Composition</h2>
            <ul>
                <li>At least 1 Faculty</li>
                <li>At least 2 Final Year / 3rd Year / Polytechnic</li>
                <li>At least 2 Second Year</li>
                <li>At least 2 First Year</li>
                <li>At least 2 ITI</li>
            </ul>
        `,

        matchsheet: `
            <h2>4. Match Sheet & Impact Player</h2>
            <ul>
                <li>Match sheet must include all player details & verification.</li>
                <li>Teams can select 1 Impact Player.</li>
            </ul>
        `,

        league: `
            <h2>5. League Format</h2>
            <ul>
                <li>Total Matches: 32</li>
                <li>Table Topper → Direct Final</li>
                <li>2nd vs 3rd → Qualifier</li>
                <li>Final: Qualifier Winner vs Table Topper</li>
            </ul>
        `,

        auction: `
            <h2>6. Auction Rules</h2>
            <ul>
                <li>Minimum Base Price: ₹300</li>
                <li>₹300–700 → +₹50 increments</li>
                <li>₹700+ → +₹100 increments</li>
                <li>Sold player cannot be replaced</li>
                <li>Unsold players re-auctioned</li>
            </ul>
        `,

        matchrules: `
            <h2>7. Match Rules</h2>
            <ul>
                <li>8 overs per match</li>
                <li>Max 4 bowlers – each can bowl 2 overs</li>
                <li>Underarm or Round Arm allowed</li>
                <li>Total Powerplay: 3 overs</li>
                <li>First 2 overs compulsory</li>
                <li>1 optional powerplay (6th–8th over)</li>
                <li>No Leg Byes & No LBW</li>
                <li>Umpire's decision final</li>
            </ul>
        `,

        trials: `
            <h2>8. Trials Rules</h2>
            <ul>
                <li>Batsman: 2 overs batting</li>
                <li>Bowler: 2 overs bowling</li>
                <li>All-rounder: 1 over batting + 1 over bowling</li>
            </ul>
        `
    };

    content.innerHTML = info[section];
}
