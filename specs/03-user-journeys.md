# User Journeys

## Journey 1: Discover a Product and Purchase on the Website
### Actors
- customer
- storefront
- product catalog
- payment provider
- order service

### Steps
1. Customer lands on home or category page.
2. Customer browses products or searches by keyword.
3. Customer opens a product detail page.
4. Customer selects a variant and quantity.
5. Customer adds the item to the cart.
6. Customer reviews cart and proceeds to checkout.
7. Customer enters shipping and account details.
8. Customer confirms payment details and place order.
9. System validates inventory, payment, and order creation.
10. Customer receives order confirmation and tracking information.

### Success Criteria
- order is created successfully
- inventory is decremented correctly
- payment is confirmed or rejected appropriately
- customer receives clear confirmation and next steps

## Journey 2: Purchase Through Amazon and Maintain Channel Separation
### Actors
- customer
- Amazon marketplace
- marketplace adapter
- order sync layer
- order system

### Steps
1. Customer purchases via Amazon.
2. Amazon order data is received or retrieved through an adapter.
3. System normalizes channel-specific data into core commerce entities.
4. Inventory and ordering logic are updated without leaking Amazon logic into the domain core.

### Success Criteria
- Amazon orders are represented in a domain-appropriate order model
- Amazon-specific logic remains isolated behind the adapter boundary
- audit logs capture channel-specific events

## Journey 3: Admin Product Management
### Actors
- admin
- product catalog
- inventory service
- audit log service

### Steps
1. Admin logs into protected admin area.
2. Admin reviews product list and categories.
3. Admin creates or updates a product and hero media.
4. Admin saves variants, pricing, and inventory thresholds.
5. System validates data and persists product records.
6. System records an audit event.

### Success Criteria
- product updates are persisted securely
- validation prevents invalid data
- changes are auditable

## Journey 4: Customer Account and Order Tracking
### Actors
- registered customer
- identity service
- order service
- customer support

### Steps
1. Customer logs in or registers.
2. Customer opens order history.
3. Customer reviews previous order details and statuses.
4. Customer accesses profile and address info.
5. Customer can request support or initiate return workflow if available.

### Success Criteria
- customer sees relevant order details securely
- profile and order data remain separated appropriately
- support employees can access only the required subset of information

## Journey 5: Inventory Exception Handling
### Actors
- operations owner
- inventory service
- admin dashboard

### Steps
1. Inventory drops below reorder threshold or stock is unavailable.
2. System flags low-stock condition or fulfillment exception.
3. Admin reviews impact and decides on reorder or backorder handling.
4. System records audit event and uses inventory policy logic.

### Success Criteria
- inventory state is visible to operations
- no overselling occurs
- exceptions are logged for review

## Open Journey Decisions
TODO: BUSINESS DECISION REQUIRED
- whether customers may checkout as guest or must register
- whether Amazon sales are synchronized in near real time or in batches
- whether returns and cancellations are handled by the website or by an external service
- whether admin onboarding is founder-only or includes support/ops staff
