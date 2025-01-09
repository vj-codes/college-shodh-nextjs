// app/actions.js
export async function getInitialData() {
    // Simulate fetching data or any server-side logic
    const data = {
        images: [barch_image, bpharma, bca, bebtech, bsc],
        options: [
            { text: "B. Arch", img: "./agri.png", link: "#" },
            { text: "B. Pharm", img: "./Pharma.png", link: "#" },
            { text: "BCA", img: "./BCA.png", link: "#" },
            { text: "BE/B. Tech", img: "./Btech.png", link: "#" },
            { text: "B. Sc", img: "./BSC.png", link: "#" },
        ],
    };
    return data;
}
