import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";

import { CommonToggle } from "./styles";

const Toggle = (props) => {
    const [isOn, setIsOn] = React.useState(
        props?.default && typeof props?.default === "boolean"
            ? props?.default
            : false
    );

    const onLabel = props?.onLabel || 'YES';
    const offLabel = props?.offLabel || 'NO';

    const onClickHandler = (e) => {
        e.preventDefault();
        setIsOn(!isOn);
    };

    React.useEffect(() => {
        if(props?.onClick) {
            props.onClick(isOn);
        }
    }, [props, isOn])
    return (
        <CommonToggle isOn={isOn} onClick={onClickHandler}>
            <span>{onLabel}</span>
            <span>{offLabel}</span>
            <div>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </CommonToggle>
    );
};

export default Toggle;
