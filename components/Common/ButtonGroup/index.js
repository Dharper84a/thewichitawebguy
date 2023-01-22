import * as React from "react";

import { CommonButtonGroup, Button} from "./styles";
const ButtonGroup = (props) => {
    const buttons =
        Array.isArray(props?.buttons) && props?.buttons.length > 0
            ? props.buttons
            : false;
    console.log(buttons)
    return (
        <CommonButtonGroup>
            {buttons &&
                buttons.map((button, index) => {
                    return (
                        <Button
                            key={index}
                            onClick={button.onClick}
                            isSelected={button.selected}
                        >
                            {button.label}
                        </Button>
                    );
                })}
        </CommonButtonGroup>
    );
};

export default ButtonGroup;
