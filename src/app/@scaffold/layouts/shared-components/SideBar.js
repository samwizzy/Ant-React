import React from 'react'

const AppSidebar = () => {
  const [state, setState] = React.useState({
    collapsed: false,
  });

  const onCollapse = collapsed => {
    console.log(collapsed);
    setState({ collapsed });
  };

  return (
    <Sidebar collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
      <div className="logo" />
    </Sidebar>
  )
}

export default AppSidebar