import Form, {FormLow} from './forms';

export function TodoListHigh() {
		return (
					<div className="todo__priority" data-priority="high">
							<div className="todo__title">
									High
							</div>
							<div className="todo__tasks">
									<Form id={'input_high'}/>

									<div className="todo__list" id="list__high">
											<div className="todo__empty-list hidden" id="emptyList">Список задач
													пуст.<br/>Нажмите
													плюс, чтобы добавить новую
													задачу.
											</div>

									</div>
							</div>
					</div>
		)
}

export function TodoListLow() {
		return(
					<div className="todo__priority" data-priority="low">
							<div className="todo__title">
									Low
							</div>
							<div className="todo__tasks">
									<Form id={'input_low'}/>
									<div className="todo__list" id="list__low">
									</div>
							</div>
					</div>
		)
}