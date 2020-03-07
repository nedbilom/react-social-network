import { connect } from 'react-redux';
import Aside from './Aside';

const mapStateToProps = (state) => {
    return {
        dataMenu: state.asideState.dataMenu,
        dataFriends: state.asideState.dataFriends,
    };
};

const AsideContainer = connect(mapStateToProps)(Aside);

export default AsideContainer;