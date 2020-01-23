import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDetailData } from '../../store/action/dataAction';

export function DetailPage({id, isFetching, selectedData, fetchDetailData}) {
    useEffect(() => {
        fetchDetailData(id);
    }, [id, fetchDetailData]);

    return (
        <div className="d-flex flex-column m-5">
            {!isFetching && (
                <>
                    <h2>{selectedData.title}</h2>
                    <div>
                        Completed: <input type="checkbox" value={selectedData.completed} disabled />
                    </div>
                </>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.appData.isFetching,
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
