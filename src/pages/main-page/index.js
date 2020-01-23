import React, { useEffect } from 'react';
import { A } from 'hookrouter'
import { connect } from 'react-redux';
import { fetchListData } from '../../store/action/dataAction';
import { ListPageWrapper, ListView, Row } from './styles';
import { Loader } from '../../components/loader';

export const MainPage = ({ fetchListData, listData, isFetching }) => {
    useEffect(() => {
        fetchListData();
    }, [fetchListData]);

    return (
        <ListPageWrapper>
            <Loader loading={isFetching}>
                <ListView>
                    {listData.map(({ id, title, completed }, idx) => (
                        <Row key={idx} completed={completed}>
                            <A href={`/list-detail/${id}`}>
                                {id}. {title}
                            </A>
                        </Row>
                    ))}
                </ListView>
            </Loader>
        </ListPageWrapper>
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
