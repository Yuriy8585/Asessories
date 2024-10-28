import axios from "axios";
import React from "react";

export const CREATE_ISSUE_STATE = "CREATE_ISSUE_STATE";
export const UPDATE_ISSUE_STATE = "UPDATE_ISSUE_STATE";
export const GET_ISSUE = "GET_ISSUE";
export const GET_ISSUE_STATE = "GET_ISSUE_STATE"
export const DELETE_ISSUE_STATE = "DELETE_ISSUE_STATE"

export const setCreateIssueState = (value) => ({type: CREATE_ISSUE_STATE, payload: value})
export const setUpdateIssueState = (value) => ({type: UPDATE_ISSUE_STATE, payload: value})
export const setGetIssueState = (value) => ({type: GET_ISSUE_STATE, payload: value})
export const setDeleteIssueState = (value) => ({type: DELETE_ISSUE_STATE, payload: value})


const token = atob("Z2hwXzFRSEhLeXhGWnVtMzJJVmRqSVo2N2QzOW42Tmc4NjFseE5EMA==");

export const createIssue = (title, body) => {
    return async (dispatch) => {
        await axios.post(
            "https://api.github.com/repos/liestory/react-study/issues",
            {title: title, body: body},
            {
                headers: {
                    Authorization: "token " + token,
                },

            }
        ).then((res) => {
            dispatch(setCreateIssueState(res.data))
        })
    }
}


export const updateIssue = (number, body) => {
    return async (dispatch) => {
        await axios.get(
            "https://api.github.com/repos/liestory/react-study/issues/" + number,
            {body: body},
            {
                headers: {
                    Authorization: "token " + token,
                },
            }
        ).then((res) => {
            dispatch(setUpdateIssueState(res.data))
        })
    }
}


export const getIssues = () => {
    return async (dispatch) => {
        await axios.get(
            "https://api.github.com/repos/liestory/react-study/issues?state=all",
            {
                headers: {
                    Authorization: "token " + token,
                },
            }
        ).then((res) => {
            console.log("res", res.data)
            dispatch(setGetIssueState(res.data))
            console.log("dispatch",)
        })
    }
}


export const deleteIssues = (number) => {
    return async (dispatch) => {
        await axios.get(
            "https://api.github.com/repos/liestory/react-study/issues/" + number,
            {
                headers: {
                    Authorization: "token " + token,
                },
            }
        ).then((res) => {
            dispatch(setGetIssueState(res.data))
        })
    }
}


export const linkIssue = (rowData) => {
    return (
        <a href={`${rowData.html_url}`} target="_blank" rel="noreferrer">
            <i className="pi pi-github" style={{fontSize: "2em"}}></i>
        </a>
    );
}


// export default {
//     CREATE_ISSUE_STATE,
//     UPDATE_ISSUE_STATE,
//     GET_ISSUE_STATE,
//     DELETE_ISSUE_STATE,
//
//     setCreateIssueState,
//     setUpdateIssueState,
//     setGetIssueState,
//     setDeleteIssueState,
//
//     getIssues,
//     createIssue,
//     updateIssue,
//     deleteIssues,
//     linkIssue
// };