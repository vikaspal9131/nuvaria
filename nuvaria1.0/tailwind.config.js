module.exports = {
  content: ["./src/index.html" ,
      "./src/login.html",
      "./src/dashbord.html",
  ],
  theme: {
    extend: {
      spacing: {
        'wide-word': '10000px', // Adjust as needed
      },
      colors: {
        'custom-color': '#1F1F1F', // Replace with your color name and value
      },
    },
  },
  plugins: [],
}

