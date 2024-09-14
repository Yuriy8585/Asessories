import React, {useEffect, useState, useCallback} from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import {connect} from "react-redux";

export const API_URL_PUBLIC = "https://api.github.com/gists/public";

class GistsList extends React.PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            gists: [],
            error: false,
            loading: false,
        }
    }


    // requestGists = async () => {
    //     this.pmapStateToProps()
    // };

    componentDidMount() {

        console.log("props ", this.props.cart)
        this.setState({
            gists: this.props.cart
        })
        console.log("gist update", this.gists)
        console.log("gist update", this.state.gists)
    }

    componentDidUpdate(prevProps, prevState) {
        this.setState({
            gists: this.props.cart
        });
        console.log("gist update", this.gists)
        console.log("gist update", this.state.gists)
    }


    // const [gists, setGists] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(true);
//
//

//
//
//     useEffect(() => {
//     requestGists();
//     }, []);
//
//  renderGist = useCallback(
//     (gist) => <li key={gist.id}>{gist.description}</li>,
//     []
// );
// //
// if (loading) {
//     return <CircularProgress/>;
// }
//
// if (error) {
//     return (
//         <>
//             <h3>Error</h3>
//             <button onClick={requestGists}>Retry</button>
//         </>);
// }
//
// if (gists.lenght === 0) {
//     return (<p>No gists</p>);
// }


    render() {
        return (
            <div>
                <div>
                    <h1>Shop Items</h1>
                    <br></br>
                    <ul>{this.gists.map((gist) => <li key={gist.id}>{gist.description}</li>)}</ul>
                    <h1>{this.gists.id}<p className="product_name"></p></h1>
                    <h2>{this.gists.description}<p className="product-description"></p></h2>

                    <button onClick={(gist) => <li key={gist.id}>{gist.description}</li>}>Добавить в корзину</button>
                </div>

                <div>
                    <h1>Shop Items</h1>
                    <br></br>
                    <ul>{this.state.gists.map((gist) => <li key={gist.id}>{gist.description}</li>)}</ul>
                    <h1>{this.state.gists.id}<p className="product_name"></p></h1>
                    <h2>{this.state.gists.description}<p className="product-description"></p></h2>

                    <button onClick={(gist) => <li key={gist.id}>{gist.description}</li>}>Добавить в корзину</button>
                </div>
            </div>
        )
            ;

    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps, null)(GistsList);