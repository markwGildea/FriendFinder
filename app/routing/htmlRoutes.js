// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    console.log('sending survey file');
    res.sendFile(path.join(__dirname, "survey.html"));
});

module.exports();