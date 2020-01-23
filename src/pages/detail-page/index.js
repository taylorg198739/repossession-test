import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDetailData } from '../../store/action/dataAction';
import { DetailPageWrapper, Status } from './styles';
import { Loader } from '../../components/loader';


export function DetailPage({id, isFetching, selectedData, fetchDetailData}) {
    useEffect(() => {
        fetchDetailData(id);
    }, [id, fetchDetailData]);

    return (
        <DetailPageWrapper>
            <Loader loading={isFetching}>
                <h2>{selectedData.title}</h2>
                {selectedData.completed && <Status completed>Completed</Status>}
                {!selectedData.completed && <Status>To Do</Status>}
            </Loader>
        </DetailPageWrapper>
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
