const app = document.getElementById('app'), views = {};

//sjekker om siden eksisterer, og returnerer innholdet
function render(page) {
    if (page) model.state.page = page;
    if (!(model.state.page in views)) {
        console.error(`view "${model.state.page}" doesn't exist.`);
        return;
    }
    const html = views[model.state.page]();
    if (html === undefined) return;
    app.innerHTML = html;
}