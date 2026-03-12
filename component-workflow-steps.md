Workflow Steps
1. Initial Setup & Analysis
Initialize Figma MCP Connection
Use the Figma MCP (Model Context Protocol) for design system integration
Verify access to the design file/project
Extract node ID from provided Figma URL:https://www.figma.com/design/ggpAl2bdadBJPMbtSbPzoN/-Telehealth-App----Components?node-id=2-3&t=o44xFK0Ubs9PvENY-1
2. Analyze Figma Design
Extract Screen Data
Layout structure and sections
Component instances and placements
Content hierarchy and flow
Navigation elements
Interactive elements and CTAs
3. Generate Screen Specifications
Visual Specifications:
Page dimensions and container widths
Layout grid system (columns, gutters, margins)
Typography hierarchy (headings, body, captions)
Color scheme and backgrounds
Section spacing and rhythm
Border radius and shadows
Breakpoint definitions
Behavioral Specifications:
Navigation interactions and routing
Scroll behaviors and sticky elements
Interactive states (hover, active, focus)
Animations and transitions
Form validations and feedback
Loading states ar skeletons
Accessibility requirements (ARIA labels, keyboard navigation, focus management)
4. Implementation Phase
Create Interactive Screen:
Build fully functional screen matching Figma design
Implement all interactive states and behaviors
Add proper TypeScript types/interfaces
Integrate all components from design system
Ensure responsive design implementation across all breakpoints
Add proper error dandling and edge cases
Implement routing and navigation logic
Add form handling and validation where applicable
5. Create Preview Showcases
Design Tokens Preview:
Color tokens used throughout the screen
Typography scale and tokens
Spacing tokens (section padding, element gaps)
Border radius tokens
Shadow/elevation/blur tokens
Theme variations (light/dark mode if applicable)
State demonstrations (loading, error, empty, success)
Scroll behavior demonstrations
Interactive element states
Content Preview:
All content sections identified and documented
Dynamic content areas marked
Placeholder vs. real content handling
Content loading strategies
SEO-relevant content structure
6. Screen-Specific Features
Page metadata (title, description, OG tags)
Data fetching requirements
API integrations needed
State management approach
User authentication requirements
Analytics tracking points
7. Documentation Generation
Generate a new test.txt for this screen with the detailed description including:
Screen purpose and user flow context
Component breakdown and hierarchy ata requirements and API endpoint:
Interaction patterns used
Responsive behavior notes
Accessibility considerations
Future enhancement opportunities
Output Structure
Directory Organization:
Add it to the screens/pages directory as a new route/page called test
Execution Order
Parse Figma URL → Extract node ID
Fetch Design Data → Get all screen information from Figma
Analyze & Document → Create specifications
Build Screen → Implement with all features
Create Previews → Generate visual showcases at all breakpoints
Write Documentation → Complete usage and maintenance guides
Setup Tests → Ensure quality and user flow validation