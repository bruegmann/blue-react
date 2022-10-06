import SlimContainer from "../../components/SlimContainer"

export default function SlimContainerExample() {
    return (
        <div>
            <p>
                Bootstrap's form components like <code>.form-control</code> and <code>.form-select</code> always have a
                width of <code>100%</code>:
            </p>

            <input type="text" className="form-control mb-3" placeholder="Enter something" />

            <p>
                <code>&lt;SlimContainer /&gt;</code> can help to keep all elements inside the container at the same more
                user friendly width:
            </p>

            <SlimContainer>
                <input type="text" className="form-control mb-3" placeholder="Enter something" />
                <div className="form-floating mb-3">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label htmlFor="floatingSelect">Works with selects</label>
                </div>
                <button type="button" className="btn btn-primary btn-lg d-block w-100">
                    Submit
                </button>
            </SlimContainer>
        </div>
    )
}
