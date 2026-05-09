
##  Quick Start

### Installation
```bash
# Install dependencies
npm install

# or with yarn
yarn install
```

### Development
```bash
# Start development server
npm expo start

```

##  Project Structure

```
app/
├── _layout.tsx          # Navigation setup
└── index.tsx            # Main app screen

components/
├── ui/                  # Base UI components (TaskInput, EmptyState, etc)
├── task/                # Task-specific components (TaskCard, TaskList)
├── features/            # Feature components (Header, ProgressCard)
└── modals/              # Modal dialogs (ConfirmModal, ActionSheetModal)

hooks/                   # Custom React hooks (useTasks, useTaskStats)
services/                # Business logic (storage service)
constants/               # Centralized constants (colors, spacing)
types/                   # TypeScript type definitions
utils/                   # Utility functions (taskUtils, uiUtils)
```

##  Key Components

### useTasks Hook
Main hook for task management with full CRUD operations:
```tsx
const { tasks, loading, addTask, toggleTask, deleteTask, markAllDone, clearCompleted } = useTasks();
```

### useTaskStats Hook
Calculates task statistics:
```tsx
const { total, completed, pending, progress } = useTaskStats(tasks);
```

### UI Components
- **Header**: App title and icon
- **StatsSection**: Task statistics cards
- **ProgressCard**: Visual progress indicator
- **TaskInput**: Add new tasks
- **TaskCard**: Individual task display
- **ActionButton**: Reusable button component
- **EmptyState**: No tasks state

##  Architecture

### Separation of Concerns
- **UI Components**: Pure presentation logic
- **Hooks**: State management and side effects
- **Services**: External data operations (storage, API)
- **Utils**: Pure functions for calculations
- **Constants**: Centralized configuration

### Type Safety
Full TypeScript support with interfaces for:
- Tasks and statistics
- Component props
- Hook returns
- Storage operations

### Performance
- Memoized calculations with `useMemo`
- Callback optimization with `useCallback`
- Component isolation to prevent unnecessary re-renders
- Efficient list rendering

## 🔧 Configuration

### Colors
Located in `constants/colors.ts`:
```tsx
export const COLORS = {
  white: "#FFFFFF",
  black: "#0A0A0A",
  // ... more colors
};
```

### Storage
- Key: `premium_tasks`
- Service: `services/storage.ts`
- Type: AsyncStorage (local device storage)

### Constants
Central configuration in `constants/index.ts`:
- Storage key
- Animation duration
- Error messages
- Button labels

##  Usage Examples

### Adding a Task
```tsx
const { addTask } = useTasks();
const task = addTask("My new task");
```

### Toggling Task Completion
```tsx
const { toggleTask } = useTasks();
toggleTask(taskId);
```

### Getting Statistics
```tsx
const { total, completed, pending, progress } = useTaskStats(tasks);
```

##  Testing

### Type Checking
```bash
npx tsc --noEmit
```

### Linting
```bash
npm run lint
```

### Manual Testing Checklist
- [ ] Add a task
- [ ] Complete a task
- [ ] Delete a task
- [ ] Mark all done
- [ ] Clear completed
- [ ] Statistics update correctly
- [ ] Progress bar updates
- [ ] Empty state displays when no tasks
- [ ] Data persists after app restart

## 📱 Supported Platforms

- iOS 13+
- Android 6.0+
- Web (experimental)

##  Learning Resources

### Used Technologies
- **React Native**: Cross-platform mobile development
- **Expo**: React Native framework and SDK
- **Expo Router**: File-based routing
- **TypeScript**: Type-safe JavaScript
- **NativeWind**: Tailwind CSS for React Native
- **AsyncStorage**: Local data persistence

### Documentation Links
- [React Native](https://reactnative.dev)
- [Expo Documentation](https://docs.expo.dev)
- [TypeScript Handbook](https://www.typescriptlang.org)
- [TailwindCSS](https://tailwindcss.com)
- [NativeWind](https://www.nativewind.dev)


##  License

This project is created as a demonstration of React Native best practices and modern app architecture.

##  Acknowledgments

Design inspiration from:
- Notion
- Linear
- Apple Reminders
- Modern minimalist design principles

Built with ❤️ using React Native and Expo.
