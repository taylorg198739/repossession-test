import React, { useEffect } from 'react';
import { A } from 'hookrouter'
import { connect } from 'react-redux';
import { fetchListData } from '../../store/action/dataAction';

export function MainPage({ fetchListData, listData, isFetching }) {
    useEffect(() => {
        fetchListData();
    }, [fetchListData]);

    return (
        <div className="d-flex flex-column m-5">
            {!isFetching && listData.map((item, idx) => (
                <A key={idx} href={`/list-detail/${item.id}`}>{item.id}. {item.title}</A>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.appData.isFetching,
        listData: state.appData.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListData: () => dispatch(fetchListData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
