// Mock data
const posts = [
    {
        title: "New Spring Collection",
        likes: 120,
        comments: 34,
        sentimentAnalysis: [
            { comment: "Love this!", sentiment: "positive" },
            { comment: "Could be better.", sentiment: "neutral" },
            { comment: "Not great at all.", sentiment: "negative" },
        ],
        trendAlignment: 85,
        suggestions: "Include hashtags #SpringFashion and #FloralDesigns.",
    },
    {
        title: "Exclusive Mother's Day Deals",
        likes: 95,
        comments: 21,
        sentimentAnalysis: [
            { comment: "Perfect gift for my mom!", sentiment: "positive" },
            { comment: "Prices are a bit high.", sentiment: "neutral" },
        ],
        trendAlignment: 70,
        suggestions: "Focus on highlighting 'gift-worthy' products.",
    },
    {
        title: "End of Season Sale",
        likes: 75,
        comments: 19,
        sentimentAnalysis: [
            { comment: "Great deals!", sentiment: "positive" },
            { comment: "Limited stock was disappointing.", sentiment: "negative" },
        ],
        trendAlignment: 60,
        suggestions: "Promote limited-time offers more aggressively.",
    },
    {
        title: "Behind the Scenes: Photo Shoot",
        likes: 110,
        comments: 28,
        sentimentAnalysis: [
            { comment: "Looks amazing!", sentiment: "positive" },
            { comment: "Show more details next time.", sentiment: "neutral" },
        ],
        trendAlignment: 80,
        suggestions: "Add hashtags like #BehindTheScenes and #FashionPhotography.",
    },
    {
        title: "Customer Testimonials",
        likes: 140,
        comments: 45,
        sentimentAnalysis: [
            { comment: "Inspiring stories!", sentiment: "positive" },
            { comment: "Wish there were more.", sentiment: "neutral" },
        ],
        trendAlignment: 90,
        suggestions: "Highlight more diverse customer experiences.",
    },
    {
        title: "New Summer Arrivals",
        likes: 130,
        comments: 32,
        sentimentAnalysis: [
            { comment: "So vibrant and fresh!", sentiment: "positive" },
            { comment: "Some items seem overpriced.", sentiment: "negative" },
        ],
        trendAlignment: 88,
        suggestions: "Focus on promoting affordable options.",
    },
    {
        title: "Winter Collection Preview",
        likes: 85,
        comments: 18,
        sentimentAnalysis: [
            { comment: "Can't wait for winter!", sentiment: "positive" },
            { comment: "Hope it's warmer this time.", sentiment: "neutral" },
        ],
        trendAlignment: 72,
        suggestions: "Emphasize comfort and warmth in posts.",
    },
    {
        title: "Valentine's Day Specials",
        likes: 150,
        comments: 50,
        sentimentAnalysis: [
            { comment: "Perfect for couples!", sentiment: "positive" },
            { comment: "A bit cliché.", sentiment: "neutral" },
        ],
        trendAlignment: 95,
        suggestions: "Expand offerings to include single-person gift ideas.",
    },
    {
        title: "Sustainable Fashion Launch",
        likes: 200,
        comments: 60,
        sentimentAnalysis: [
            { comment: "Love this eco-friendly initiative!", sentiment: "positive" },
            { comment: "More details on materials, please.", sentiment: "neutral" },
        ],
        trendAlignment: 98,
        suggestions: "Share the story behind the materials used.",
    },
    {
        title: "Limited-Time Flash Sale",
        likes: 180,
        comments: 55,
        sentimentAnalysis: [
            { comment: "Got some amazing deals!", sentiment: "positive" },
            { comment: "Missed out, unfortunately.", sentiment: "negative" },
        ],
        trendAlignment: 90,
        suggestions: "Send reminders closer to sale deadlines.",
    },
];

// Function to calculate engagement score
const calculateEngagementScore = (likes, comments) => {
    return Math.round((likes * 0.6 + comments * 0.4) / 10);
};

// Render engagement scores
const renderEngagementTable = () => {
    const engagementTable = document.getElementById("engagementTable");
    engagementTable.innerHTML = ""; // Clear existing content

    posts.forEach(({ title, likes, comments }) => {
        const engagementScore = calculateEngagementScore(likes, comments);
        engagementTable.innerHTML += `
            <tr>
                <td>${title}</td>
                <td>${likes}</td>
                <td>${comments}</td>
                <td>${engagementScore}</td>
            </tr>
        `;
    });
};

// Render sentiment analysis
const renderSentimentList = () => {
    const sentimentList = document.getElementById("sentimentList");
    sentimentList.innerHTML = ""; // Clear existing content

    posts.forEach(({ title, sentimentAnalysis }) => {
        sentimentList.innerHTML += `
            <li class="list-group-item">
                <strong>${title}:</strong>
                <ul>
                    ${sentimentAnalysis
                        .map(
                            ({ comment, sentiment }) => `
                        <li class="${sentiment}-sentiment">${comment} (${sentiment})</li>
                    `
                        )
                        .join("")}
                </ul>
            </li>
        `;
    });
};

// Render trend alignment
const renderTrendTable = () => {
    const trendTable = document.getElementById("trendTable");
    trendTable.innerHTML = ""; // Clear existing content

    posts.forEach(({ title, trendAlignment, suggestions }) => {
        trendTable.innerHTML += `
            <tr>
                <td>${title}</td>
                <td>${trendAlignment}%</td>
                <td>${suggestions}</td>
            </tr>
        `;
    });
};

// Initialize scoring page
renderEngagementTable();
renderSentimentList();
renderTrendTable();
