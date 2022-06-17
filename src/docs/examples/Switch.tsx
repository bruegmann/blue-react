import { useState } from "react"
import Switch from "../../components/Switch"

export default function SwitchExample() {
    const [isChecked, setIsChecked] = useState(false)
    const toggleIsChecked = () => setIsChecked(!isChecked)

    return (
        <div>
            <Switch checked={isChecked} onChange={toggleIsChecked} label="Hi" />
            <br />
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={isChecked}
                    onChange={toggleIsChecked}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Bootstrap's form-switch
                </label>
            </div>
            <h4 className="mt-4 mb-3">Legacy support</h4>
            <p>Use the `legacy` prop to use the older look and feel.</p>
            <Switch
                className="lg"
                checked={isChecked}
                onChange={toggleIsChecked}
                sliderLabel={isChecked ? "Yay🎉" : "😒"}
                legacy
            />
            <br />
            <Switch checked={isChecked} onChange={toggleIsChecked} legacy /> <label>Normal switch</label>
        </div>
    )
}
