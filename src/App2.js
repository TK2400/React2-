import ShowInfo from './components/ShowInfo';


export default function App2() {


    return (
        <div style={{
            backgroundColor: "green",
            marginLeft: "auto",
            marginRight: "auto",
            width: "300px"
        }}
        >
            <ShowInfo style={{
                display: "flex",
                justifyContent: "centre"
            }} 
            fullName="Ignas Brazdeikis" 
            text="Šiemet pagaliau žais Lietuvos rinktinėje!" />
        </div>
    );
}