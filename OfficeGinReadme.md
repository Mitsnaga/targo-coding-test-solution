# Database Schema Documentation

## Tables

Explanations for some of the fields

### Purchase_History

Keeps a log of all the bottles bought over time.

| Column Name   | Description                                              |
| ------------- | -------------------------------------------------------- |
| id            | Primary key, unique identifier for each purchase record. |
| bottle_id     | Foreign key referencing the Bottle table.                |
| purchase_date | Date when the bottle was purchased.                      |
| rating        | Tracks the bottle rating over time.                      |

### Bottle

Stores details of each bottle.

| Column Name   | Description                                          |
| ------------- | ---------------------------------------------------- |
| id            | Primary key, unique identifier for each bottle.      |
| name          | Name of the bottle.                                  |
| purchase_date | Indicates the most recent purchase.                  |
| status        | Checks if the bottle is available on-premise or not. |
| rating        | Latest rating entry for that bottle.                 |
