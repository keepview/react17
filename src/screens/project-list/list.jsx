import React from 'react'

export const List = ({ users, list }) => {
  return <div>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((project, index) =>
            <tr key={index}>
              <td>{project.name}</td>
              <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
}