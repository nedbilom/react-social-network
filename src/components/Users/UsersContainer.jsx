import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsfetching, getFollowingInProgress } from '../../redux/users-selectors'

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} follow={this.props.follow} unfollow={this.props.unfollow} onPageChanged={this.onPageChanged} users={this.props.users} isFetching={this.props.isFetching} toggleIsFollowingProgress={this.props.toggleIsFollowingProgress} followingInProgress={this.props.followingInProgress} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsfetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default connect(mapStateToProps, { unfollow, follow, setCurrentPage, toggleIsFollowingProgress, requestUsers })(UsersContainer);