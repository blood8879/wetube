const videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 12,
        id: 1
    },
    {
        title: "2nd Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2
    },
    {
        title: "3rd Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3
    },
];

export const trending = (req, res) =>  {     
    res.render("home", { pageTitle: "Home", videos });
}
export const watch = (req, res) => { 
    const { id } = req.params;
    const video = videos[id-1]
    return res.render("watch", {pageTitle: `Watching ${video.title}`, video});
}
export const getEdit = (req, res) => { 
    const { id } = req.params;
    const video = videos[id-1]
    return res.render("edit", { pageTitle: `Editing:  ${video.title}`, video}); 
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