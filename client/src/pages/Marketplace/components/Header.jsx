export default function Header({ username, mode }) {

    return (
        <div>
            <div className="normal-text" style={{text: "black"}}>
                <h1 className="normal-text">Academiax</h1>
                <h1 className="normal-text">Marketplace</h1>
                <div style={{ display: "flex" }}>
                    <h1 className="normal-text">username</h1>
                    <h1 className="normal-text">mode</h1>
                    <a href={"/"} style={{
                        paddingTop: 21,
                        textDecorationLine: "none",
                        color: "#000",
                        textAlignVertical: 'center',
                        font: "optional",
                        fontWeight: "bold",
                        fontSize: "32px",
                        }}>Logout</a>
                </div>
            </div>
            <h1 style={{
                display: "flex",
                padding: "40px",
                justifyContent: "center",
            }}>This is the Academiax Marketplace</h1>
        </div>
    )
}