import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDetailData } from '../../store/action/dataAction';

export function DetailPage(props) {
    useEffect(() => {
        props.fetchDetailData(props.id);
    }, []);

    return (
        <div className="d-flex flex-column">
            <h2>{props.selectedData.title}</h2>
            <div>
                Completed: <input type="checkbox" value={props.selectedData.completed} disabled />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedData: state.appData.selectedData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailData: (id) => dispatch(fetchDetailData(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPage)
