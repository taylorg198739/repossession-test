import React, { useEffect } from 'react';
import { A } from 'hookrouter'
import { connect } from 'react-redux';
import { fetchListData } from '../../store/action/dataAction';

export function MainPage(props) {
    useEffect(() => {
        props.fetchListData();
    }, []);

    return (
        <div className="d-flex flex-column">
            {props.listData && props.listData.map((item, idx) => (
                <A key={idx} href={`/list-detail/${item.id}`}>{item.id} {item.title}</A>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
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

