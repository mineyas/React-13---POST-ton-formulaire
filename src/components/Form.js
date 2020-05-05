import React, {Component} from 'react'
import axios from 'axios';


class Form extends Component{
    state = {
                title: "",
                poster: "",
                comment: ""
            }

onChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value,
    });
}
submitForm = (e) => {
    e.preventDefault();

    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios.post(url, this.state)
    .then(res => res.data)
    .then(res => {
    alert(`OOOOOOOOH ${res.id} !`);
})
    .catch(e => {
    console.error(e);
    alert(`AAAAAAAAAAAAAAAHHHHHHHHHHHHHHH : ${e.message}`);
});

}

render() {
    return(

<div className="Form">

            <h1>MOVIE</h1>

    <form onSubmit={this.submitForm}>
            <fieldset>
            <legend>DJ KHALED</legend>
                <div className="field">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                
                    />
                </div>

                <div className="field">
                    <label htmlFor="url">Poster</label>
                    <input
                    type="url"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                    />
                </div>

                <div className="field">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                    type="text"
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.comment}
                    />
                </div>
        <hr />
                <div className="field">
                    <input className="buttonstyle"type="submit" value="Envoyer" />
                </div>
            </fieldset>
    </form>
</div>
    )
}
}

export default Form