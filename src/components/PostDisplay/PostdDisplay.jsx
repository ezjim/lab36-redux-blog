import React, { Component } from 'react'
import Post from '../../data/post'

const Post = ({ id, title, body }) => (
  <h3>{title}</h3>
<p>{id}</p>
<p>{body}</p>
);

