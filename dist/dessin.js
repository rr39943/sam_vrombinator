class Dessin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", {
      id: "dessin"
    }, React.createElement("img", {
      className: "planete-g planete",
      src: "img/Blue_Marble_rotating.gif"
    }), React.createElement("img", {
      id: "fusee-b",
      className: "fusee",
      src: "img/rocket-space-blue.png"
    }), React.createElement("img", {
      id: "fusee-r",
      className: "fusee",
      src: "img/rocket-space-red.png"
    }), React.createElement("img", {
      className: "planete-d planete",
      src: "img/mars_r.gif"
    }));
  }

}

export default Dessin;