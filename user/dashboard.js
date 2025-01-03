// Array to store posts temporarily
let posts = [
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "New Spring Collection",
        image: "https://via.placeholder.com/600x400?text=Spring+Collection",
        content: "🌸 Our spring collection is here! Fresh pastels, floral prints, and lightweight fabrics for the perfect seasonal look.",
        date: "March 28, 2024",
        likes: 120,
        comments: 34,
    },
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "Exclusive Mother's Day Deals",
        image: "https://via.placeholder.com/600x400?text=Mother%27s+Day+Specials",
        content: "💐 Celebrate Mother's Day with exclusive deals on our floral dresses. Perfect for gifting!",
        date: "April 5, 2024",
        likes: 95,
        comments: 21,
    },
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "End of Season Clearance",
        image: "https://via.placeholder.com/600x400?text=Clearance+Sale",
        content: "🔥 Don’t miss out! Clearance sale on select styles, while supplies last.",
        date: "March 15, 2024",
        likes: 75,
        comments: 18,
    },
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "Customer Highlight",
        image: "https://via.placeholder.com/600x400?text=Customer+Highlight",
        content: "📸 Shoutout to our amazing customer Emily for rocking our floral summer dress!",
        date: "March 22, 2024",
        likes: 105,
        comments: 40,
    },
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "Behind the Scenes",
        image: "https://via.placeholder.com/600x400?text=Behind+the+Scenes",
        content: "👗 A sneak peek into the making of our latest spring collection.",
        date: "March 10, 2024",
        likes: 80,
        comments: 15,
    },
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "Flash Sale Announcement",
        image: "https://via.placeholder.com/600x400?text=Flash+Sale",
        content: "⚡ 24-hour flash sale! 20% off all spring items!",
        date: "March 5, 2024",
        likes: 135,
        comments: 50,
    },
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "Trending Now",
        image: "https://via.placeholder.com/600x400?text=Trending",
        content: "✨ Our pastel tops are trending this week! Grab yours today.",
        date: "March 1, 2024",
        likes: 110,
        comments: 25,
    },
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "Upcoming Summer Collection",
        image: "https://via.placeholder.com/600x400?text=Summer+Collection",
        content: "☀️ Coming soon: Our vibrant summer collection! Stay tuned.",
        date: "February 28, 2024",
        likes: 90,
        comments: 22,
    },
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "Thank You Post",
        image: "https://via.placeholder.com/600x400?text=Thank+You",
        content: "🙏 Thank you to all our loyal customers for supporting us this spring!",
        date: "February 25, 2024",
        likes: 200,
        comments: 60,
    },
    {
        user: "Tanya Spring Clothes LTD",
        avatar: "https://via.placeholder.com/50",
        title: "Valentine’s Day Specials",
        image: "https://via.placeholder.com/600x400?text=Valentine%27s+Specials",
        content: "💖 Celebrate Valentine’s Day with our romantic floral collection!",
        date: "February 14, 2024",
        likes: 150,
        comments: 45,
    },
];

// Mock product data for the carousel
const products = [
    {
        image: "https://via.placeholder.com/600x400?text=Spring+Dress+Collection",
        title: "Spring Dress Collection",
        description: "Light and breezy dresses perfect for the spring season.",
    },
    {
        image: "https://via.placeholder.com/600x400?text=Floral+Skirts",
        title: "Floral Skirts",
        description: "Elegant floral designs for casual and formal wear.",
    },
    {
        image: "https://via.placeholder.com/600x400?text=Pastel+Tops",
        title: "Pastel Tops",
        description: "Soft pastel tops that add a pop of color to your wardrobe.",
    },
    {
        image: "https://via.placeholder.com/600x400?text=Summer+Sandals",
        title: "Summer Sandals",
        description: "Comfortable and stylish sandals for the summer.",
    },
    {
        image: "https://via.placeholder.com/600x400?text=Maxi+Dresses",
        title: "Maxi Dresses",
        description: "Flowy and comfortable maxi dresses for all occasions.",
    },
];

// Render product carousel
const renderCarousel = () => {
    const carouselItems = document.getElementById("carouselItems");
    carouselItems.innerHTML = ""; // Clear any existing items

    products.forEach((product, index) => {
        const isActive = index === 0 ? "active" : ""; // Set the first item as active
        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <img src="${product.image}" class="d-block w-100" alt="${product.title}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${product.title}</h5>
                    <p>${product.description}</p>
                </div>
            </div>
        `;
        carouselItems.innerHTML += carouselItem;
    });
};

// Render social feed
const renderPosts = () => {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = ""; // Clear any existing posts

    posts.forEach((post) => {
        const postHTML = `
            <div class="card post-card mb-3">
                <div class="card-header d-flex align-items-center">
                    <img src="${post.avatar}" alt="Avatar" class="rounded-circle me-2" width="40" height="40">
                    <strong>${post.user}</strong>
                </div>
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content}</p>
                    <small class="text-muted">Posted on: ${post.date}</small>
                    <div class="mt-2">
                        <span class="me-3"><i class="fas fa-thumbs-up"></i> ${post.likes} Likes</span>
                        <span><i class="fas fa-comment"></i> ${post.comments} Comments</span>
                    </div>
                </div>
            </div>
        `;
        postsContainer.innerHTML += postHTML;
    });
};

// Function to generate AI-driven posts
const generateAIPosts = () => {
    const settings = JSON.parse(localStorage.getItem("aiSettings"));
    if (!settings) return;

    const aiPosts = [
        {
            user: "AI Social Manager",
            avatar: "https://via.placeholder.com/50",
            title: `New ${settings.products} Collection`,
            image: "https://via.placeholder.com/600x400?text=New+Collection",
            content: `Check out our latest ${settings.products} in the ${settings.industry} industry! ${settings.recentTrends}`,
            date: new Date().toLocaleDateString(),
            likes: 0,
            comments: 0,
        },
        // Add more AI-generated posts based on settings
    ];

    posts = [...aiPosts, ...posts];
    renderPosts();
};

// Add a new post
document.getElementById("postButton").addEventListener("click", () => {
    const postInput = document.getElementById("postInput");
    const postImageUpload = document.getElementById("postImageUpload");
    const file = postImageUpload.files[0];

    if (postInput.value.trim()) {
        const newPost = {
            user: "Tanya Spring Clothes LTD",
            avatar: "https://via.placeholder.com/50",
            title: "User Post",
            image: file
                ? URL.createObjectURL(file)
                : "https://via.placeholder.com/600x400?text=User+Generated+Post",
            content: postInput.value,
            date: new Date().toLocaleDateString(),
            likes: 0,
            comments: 0,
        };

        posts.unshift(newPost);
        renderPosts();

        // Clear inputs
        postInput.value = "";
        postImageUpload.value = "";
    } else {
        alert("Please write something to post.");
    }
});

// Call generateAIPosts on page load
window.onload = () => {
    generateAIPosts();
    renderPosts();
    renderCarousel();
};

// Render initial content
renderPosts();
renderCarousel();
