```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user enters "howdy" in the text field and clicks save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa {"content": "howdy", "date": "2023-11-27T17:58:19.165Z"1}
    activate server
    server-->>browser: 201 Created {"message":"note created"}
    deactivate server

```