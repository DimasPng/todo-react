import React from 'react';

export default function Template() {
		return(
					<template id="task-template">
							<div className="todo__task">
									<input className="todo__checkbox" type="checkbox"/>
									<label className="todo__label">
									</label>
									<div className="todo__time"></div>
									<div className="todo__plus todo__plus_rotate -delet"></div>
							</div>
					</template>
		)
}