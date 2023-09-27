import { useState } from "react";

const AddMovie = (props) => {

    const [name,SetName] = useState("");

    function SubmitForm(e, props) {
        e.preventDefault();
        props.handleAddMovie(name);
        SetName("");
    }

    return (
        <form onSubmit={(e) => SubmitForm(e,props)}>
            <div className="row">
                <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
                <div className="col-8 offset-1">
                    <input type="text" placeholder="Movie Name..." 
                        className="form-control" 
                        value={name}
                        onChange={(e) => SetName(e.target.value)}>
                    </input>
                </div>
                <div className="col-2">
                    <button className="btn btn-success form-control"
                    >Add</button>
                </div>
                <hr className="mt-3"/>
            </div>
        </form>
    );
};

export default AddMovie;