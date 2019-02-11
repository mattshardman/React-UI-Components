import React from 'react';
import './Header.css';

const HeaderTitle = () => <div>
    <h1>Lambda School</h1>
    <p>@LambdaSchool</p>
    <p>{new Date().toString()}</p>
</div>

export default HeaderTitle;