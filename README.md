Technical Interview Scenario: Actions and Filtering Engine
Scenario
Design and implement an Actions and Filtering Engine that processes records of any entity.
Requirements
Filtering Engine:
Create an engine that filters records based on user-defined criteria.
The engine should accept filter conditions dynamically, such as "field = value," "field > value," "field < value," etc.
The engine should be able to filter records of any entity, provided the field names are correct.
Actions Engine:
Develop an engine that performs specific actions on records post-validation.
Actions could include transforming data, appending error messages, or any other custom operation.
The engine should accept action configurations dynamically.
The engine should be able to apply actions to records of any entity, provided the field names are correct.
Integration:
The Filtering Engine should be integrated with the Actions Engine.
Only records that pass the filter criteria should be processed by the Actions Engine.
Code Sandbox:
The candidate will be provided with a code sandbox environment to implement the solution.
The environment will include sample data representing records of different entities.
Example Actions
Transform: Convert a date format from YYYY-MM-DD to DD/MM/YYYY.
Append Error: Add an error message if a specific field is empty.
Example Filter Criteria
"age > 18"
"status = 'active'"
"date < '2023-01-01'"
Task
Implement the Actions and Filtering Engine in the provided code sandbox environment. Demonstrate the functionality with the sample data provided.

Note:
The filters will be in the following format:

{
"combinator": "and",
"entity_type": "entity",
"rules": [
	{
		"field": "some field",
		"operator": "some_operator",
		"value": "some_value"
}
]
}

// actions config
{
	"action": "transform",
	"entity_type": "entity",
	"action_params": {
		"value": str,
		"replacement_value": str,
		"field_name": str
	}
}


CodeSandbox Template URL: https://codesandbox.io/p/devbox/9t9nx7 (note: candidate will fork this, and share their own public/unlisted fork url post interview for review).
