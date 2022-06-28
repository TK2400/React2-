import ShowInfo from './components/ShowInfo';


export default function App2() {

    return (
        <header>
            <ShowInfo state={false} />
            <br></br>
            <ShowInfo state={false} />
            <br></br>
            <ShowInfo state={true} />
        </header>

    );
}