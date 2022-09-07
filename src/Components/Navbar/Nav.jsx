import { padding } from "@mui/system"
import { eventWrapper } from "@testing-library/user-event/dist/utils"
import CartWidget from "../Cartwidget/CartIcon"

const Navbar = () =>{
    return(
        <header style={styles.header}>
            <h1 style={styles.logo}>ShoPC</h1>
            <nav>
                <a href="#" style={styles.links}>Categoria 1</a>
                <a href="#" style={styles.links}>Categoria 2</a>
                <a href="#" style={styles.links}>Categoria 3</a>
            </nav>
            <CartWidget />
        </header>
    )
}

const styles = {
    header:{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgb(52, 116, 235)"
    },
    links:{
        backgroundColor: "rgb(111, 161, 252)",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        color: "#cccccc",
        textDecoration: "none",
        alingText: "center"
    },
    logo:{
        padding: 15,
        margin: 10,
        backgroundColor: "rgb(111, 161, 252)",
        borderRadius: 10,
        color: "#cccccc"
    }
}

export default Navbar