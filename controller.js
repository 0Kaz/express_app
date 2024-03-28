const homePage = (req,res) => {
  let data = {
    name: "Omar",
    age: 36,
    location: "Casablanca"
  }
  res.render("index", {data: data})
}

const aboutPage = (req,res) => {
  res.send("About")
}

const contactPage = (req,res) => {
  res.send("Contact")
}

export {homePage, aboutPage, contactPage}
