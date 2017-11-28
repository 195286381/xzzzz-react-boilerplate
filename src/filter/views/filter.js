import React from 'react'
import * as actions from '../actions'
import { FilterTypes } from '../../constants'
import { connect } from 'react-redux'

const Filter = ({ filter, handleClick }) => {
    return (
        <div>
            <ul>
                <li onClick={() => handleClick(FilterTypes.ALL)}><a href="javascript:void(0)" style={{fontWeight: filter === FilterTypes.ALL ? 700 : 400}}>全部</a></li>
                <li onClick={() => handleClick(FilterTypes.UNCOMPLETE)}><a href="javascript:void(0)" style={{fontWeight: filter === FilterTypes.UNCOMPLETE ? 700 : 400}}>待完成</a></li>
                <li onClick={() => handleClick(FilterTypes.COMPLETE)}><a href="javascript:void(0)" style={{fontWeight: filter === FilterTypes.COMPLETE ? 700 : 400}}>已完成</a></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state, ownerProps) => ({
    filter: state.filter.filter,
})

const mapDispatchToProps = (dispatch, ownerProps) => ({
    handleClick: (type) => dispatch(actions.changeFilter(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)