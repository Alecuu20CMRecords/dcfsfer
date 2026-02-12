📊 Trends in European Household Spending (1995–2024)  
Author: Sam Ginzburg  
Tech Stack: Tableau · Eurostat (COICOP 2018) · Relational Data Modeling · Calculated Fields  

---

## 🔗 Live Dashboard & Data Source

**Tableau Public:**  
https://public.tableau.com/views/TrendsinEuropeanSpendingv2/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link  

**Eurostat Dataset (HFCE – COICOP 2018):**  
https://ec.europa.eu/eurostat/databrowser/view/nama_10_cp18/default/table?lang=en&category=na10.nama10.nama_10_hfc  

---

## Business Context

European household consumption has expanded over the past three decades amid EU expansion, financial crises, and post-pandemic recovery.  

This project evaluates not just *how much* spending increased, but **how its structure evolved**.

### Core Questions
- Has total consumption growth meaningfully improved living standards?
- Did essentials and non-essentials grow at different rates?
- Which countries drove EU-wide expansion?
- Where do structural divergences appear?

Rather than presenting static totals, the dashboard examines **composition, growth dynamics, and cross-country variation** from 1995–2024.

---

# Data Preparation & Modeling

## Pre-Tableau Data Engineering

- Reshaped wide Eurostat export into tidy format  
  `Country × Category × Year`
- Converted suppressed values to nulls; enforced numeric typing
- Integrated reference tables using **left joins**:
  - ISO country codes → full country names
  - COICOP codes → product descriptions
- Validated aggregation consistency across country-year-category combinations

Result: a clean, long-format, BI-ready dataset.

---

## In-Workbook Analytical Layer (Tableau)

- Reclassified COICOP categories into **Essential vs Non-essential**
- Built calculated fields for:
  - % share of total
  - Growth (absolute & percent)
  - Essential vs non-essential deltas
  - Country contribution to EU totals
- Applied dynamic value scaling (millions → billions → trillions)

---

# Key Findings

- EU household consumption reached **€7.38T in 2024**, up **51% since 1995** (~1% CAGR).
- Spending composition remained relatively stable: essentials consistently represent ~59%.
- Growth was uneven: Eastern and Southern European economies experienced higher percentage gains.
- Housing growth was heavily driven by **imputed rents**, reflecting asset price dynamics more than real outlays.

---

# Dashboard & Visualization Techniques

All screenshots below are stored in `/assets`.

---

## Executive Framing & KPI Scaling

![Executive Overview](/assets/title_and_adjusted_values.png)

- Hypothesis-driven title
- Top-level KPIs (Total, Absolute Growth, % Growth, CAGR)
- Scaled values for interpretability (billions/trillions)

---

## Composition Shift (Donut Charts)

![Donut Charts](/assets/donut_charts.png)

Side-by-side 1995 vs 2024 comparison of essential vs non-essential share.

- Consistent color encoding
- Controlled labeling for clarity
- Ratio-focused visualization

---

## Country Comparison (Scatter + Custom Shapes)

![Scatter with Viz in Tooltip](/assets/scatter_with_viz_in_tooltip.png)

- X-axis: Total consumption  
- Y-axis: % non-essential  
- Custom flag shapes uploaded into Tableau  
- **Viz in Tooltip** reveals country-level time series on hover  

This design reduces clutter while preserving analytical depth.

---

## Geographic Growth Comparison

![Geographic Maps](/assets/geo_maps.png)

Dual choropleths:
- Absolute growth
- Percent growth  

Allows scale vs proportional comparison across Europe.

---

## Category-Level Change (Dumbbell Chart)

![Dumbbell Chart](/assets/dumbbell_chart.png)

Before/after comparison (1995 vs 2024) across COICOP categories.

- Constructed non-native dumbbell structure
- Sorted for readability
- Emphasizes magnitude of change

---

## Housing Deep Dive (Time-Series & Color Hierarchy)

![Housing Line Chart](/assets/line_housing_colors.png)

- Consistent color scheme (primary emphasis vs contextual series)
- Structured annotation for narrative clarity
- Highlights imputed vs actual rent divergence

---

# Tableau Skills Demonstrated

- Relational data modeling (left joins)
- Calculated fields & grouping logic
- Custom shapes integration
- Viz in Tooltip implementation
- Sequential & categorical color management
- Non-native chart construction (dumbbell)
- Executive dashboard layout & KPI formatting
- Clutter reduction through interactivity

---

# Data Considerations

- Values are reported in **chain-linked volumes (real terms)**.
- Imputed rents represent owner-occupied housing value and materially impact housing growth interpretation.
- EU aggregates and country-level figures are sourced directly from Eurostat.

---

This project demonstrates the ability to move from raw statistical data to structured analysis and interactive BI storytelling.
