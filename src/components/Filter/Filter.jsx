import React from 'react';
import {InputLabel, Select, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {filterText,selectFilter} from "../../features/filter/filterSlice";

function Filter(props) {
    const {filterByType, value} = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        dispatch(filterText(e.target.value));
    };

    return (
        <div className={'filter-top'}>
            <TextField
                id="standard-textarea"
                label="Filter"
                placeholder=""
                multiline
                value={value}
                onChange={onChangeHandler}
                variant="standard"
            />
        </div>

    );
}

export default Filter;
