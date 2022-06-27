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
            <ShowInfo fullName="Ignas Brazdeikis"
                text="Šiemet pagaliau žais Lietuvos rinktinėje!"
                state={false}
            />
            <hr></hr>
            <ShowInfo fullName="Rimas Kurtinaitis"
                text="senas krepsinio vilkas, dabar daugiau treneris"
                state={true}
            />
            <hr></hr>
            <ShowInfo fullName="Arunas Mazeika"
                text="Neptuno didvyris!"
                state={true}
            />
        </div>
    );
}