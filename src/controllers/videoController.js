import Video from "../models/Video";

export const home = (req, res) =>  {
    Video.find({}, (error, videos) => {});
    res.render("home", { pageTitle: "Home" });
}
export const watch = (req, res) => { 
    const { id } = req.params;
    const video = videos[id-1]
    return res.render("watch", {pageTitle: `Watching `});
}
export const getEdit = (req, res) => { 
    const { id } = req.params;
    const video = videos[id-1]
    return res.render("edit", { pageTitle: `Editing: `}); 
}
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id-1].title = title;
    return res.redirect(`/`);
}
// export const search = (req, res) => res.send("search");
// export const upload = (req, res) => res.send("upload");
// export const deleteVideo = (req, res) => { res.send("delete"); }