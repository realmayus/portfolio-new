export function handleAnchorClick(event) {
    event.preventDefault(); // Let us take over the work
    const link = event.currentTarget; // the <a> that was clicked
    const anchorId = new URL(link.href).hash.replace("#", ""); // the ID of the linked <a>
    const anchor = document.getElementById(anchorId); // the element of the linked <a>
    window.scrollTo({
        top: window.scrollY + anchor.getBoundingClientRect().top - 200,
        behavior: "smooth",
    });

    history.replaceState(null, "", "#" + anchorId); // Set new hash in URL

    const e = new Event("hashchange"); // dispatch hash change event manually (so the scribble animation works)
    window.dispatchEvent(e);
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// unused, used for generating bounding boxes of scribble path (is baked)
// export function getBBoxForPath(d) {
//     console.log("--- ", d)
//     let vec = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     vec.setAttributeNS("http://www.w3.org/2000/svg", "viewBox", "0 0 5000 5000");
//     vec.setAttribute('width', '100px');
//     vec.setAttribute('height', '100px');
//
//     let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     path.setAttribute( "d", d);
//     path.setAttribute("fill", "none");
//     path.setAttributeNS("http://www.w3.org/2000/svg", "stroke-width", "17px");
//     vec.appendChild(path);
//     document.body.appendChild(vec);
//     const {x, y, width, height} = vec.getBBox();
//     console.log(x, y, width, height);
//
//     document.body.removeChild(vec);
//     return `${x-9} ${y-9} ${width + 17} ${height + 17}`;
// }
