import React from 'react'
import { connect } from 'react-redux'
import { practiceFunction } from '../redux/reducer'

function Header(props){
    console.log(props)
    return (
        <div>
            Header
            <button onClick={() => props.practiceFunction([props.store.user.username, props.store.user.id])}>Click!</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        store: state.reducer
    }
}

export default connect(mapStateToProps, {practiceFunction})(Header)