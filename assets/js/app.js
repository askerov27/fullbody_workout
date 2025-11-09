// Exercise Database
        const exerciseDatabase = {
            "Грудь": [
                { name: "Жим штанги лежа", equipment: "Штанга, скамья" },
                { name: "Жим гантелей лежа", equipment: "Гантели, скамья" },
                { name: "Жим в тренажере сидя", equipment: "Тренажер для жима" },
                { name: "Жим гантелей на наклонной скамье", equipment: "Гантели, наклонная скамья" },
                { name: "Разведение гантелей лежа", equipment: "Гантели, скамья" },
                { name: "Сведение рук в тренажере (баттерфляй)", equipment: "Тренажер баттерфляй" },
                { name: "Отжимания на брусьях", equipment: "Брусья" },
                { name: "Кроссовер в блоке", equipment: "Кабельный тренажер" },
                { name: "Жим в Смит машине", equipment: "Смит машина" },
                { name: "Жим на наклонной скамье в тренажере", equipment: "Тренажер, наклонная скамья" }
            ],
            "Спина": [
                { name: "Подтягивания", equipment: "Перекладина" },
                { name: "Тяга верхнего блока широким хватом", equipment: "Тренажер для тяги" },
                { name: "Тяга штанги в наклоне", equipment: "Штанга" },
                { name: "Тяга гантели в наклоне", equipment: "Гантели, скамья" },
                { name: "Тяга горизонтального блока", equipment: "Кабельный тренажер" },
                { name: "Т-гриф тяга", equipment: "Т-гриф или тренажер" },
                { name: "Становая тяга", equipment: "Штанга" },
                { name: "Румынская тяга", equipment: "Штанга или гантели" },
                { name: "Шраги со штангой", equipment: "Штанга" },
                { name: "Тяга верхнего блока обратным хватом", equipment: "Кабельный тренажер" },
                { name: "Пуловер в блоке", equipment: "Кабельный тренажер" }
            ],
            "Ноги (квадрицепс)": [
                { name: "Приседания со штангой", equipment: "Штанга, стойка" },
                { name: "Жим ногами", equipment: "Тренажер для жима ногами" },
                { name: "Разгибания ног в тренажере", equipment: "Тренажер для разгибания ног" },
                { name: "Фронтальные приседания", equipment: "Штанга" },
                { name: "Приседания в Смит машине", equipment: "Смит машина" },
                { name: "Выпады со штангой", equipment: "Штанга" },
                { name: "Гакк-приседания", equipment: "Гакк-машина" },
                { name: "Болгарские сплит-приседания", equipment: "Гантели, скамья" },
                { name: "Выпады в движении", equipment: "Гантели или штанга" }
            ],
            "Ноги (бицепс бедра)": [
                { name: "Сгибания ног лежа", equipment: "Тренажер для сгибания ног" },
                { name: "Сгибания ног сидя", equipment: "Тренажер для сгибания ног" },
                { name: "Румынская тяга", equipment: "Штанга или гантели" },
                { name: "Становая тяга на прямых ногах", equipment: "Штанга" },
                { name: "Гиперэкстензия", equipment: "Тренажер для гиперэкстензии" },
                { name: "Сгибания ног стоя", equipment: "Кабельный тренажер" }
            ],
            "Ноги (ягодицы)": [
                { name: "Приседания со штангой", equipment: "Штанга, стойка" },
                { name: "Ягодичный мостик со штангой", equipment: "Штанга, скамья" },
                { name: "Выпады", equipment: "Гантели или штанга" },
                { name: "Жим ногами (постановка ног высоко)", equipment: "Тренажер для жима ногами" },
                { name: "Отведение ноги в кабеле", equipment: "Кабельный тренажер" },
                { name: "Разведение ног в тренажере", equipment: "Тренажер для отведения" },
                { name: "Болгарские сплит-приседания", equipment: "Гантели, скамья" }
            ],
            "Ноги (икры)": [
                { name: "Подъем на носки стоя", equipment: "Тренажер для икр" },
                { name: "Подъем на носки сидя", equipment: "Тренажер для икр" },
                { name: "Подъем на носки в жиме ногами", equipment: "Тренажер для жима ногами" },
                { name: "Подъем на носки в Смит машине", equipment: "Смит машина" }
            ],
            "Плечи (дельты)": [
                { name: "Жим штанги стоя (армейский жим)", equipment: "Штанга" },
                { name: "Жим гантелей сидя", equipment: "Гантели, скамья" },
                { name: "Жим в тренажере сидя", equipment: "Тренажер для жима" },
                { name: "Махи гантелями в стороны", equipment: "Гантели" },
                { name: "Махи в стороны в тренажере", equipment: "Тренажер для махов" },
                { name: "Махи гантелями вперед", equipment: "Гантели" },
                { name: "Разведение в наклоне (задняя дельта)", equipment: "Гантели" },
                { name: "Обратная бабочка (задняя дельта)", equipment: "Тренажер баттерфляй" },
                { name: "Тяга к подбородку широким хватом", equipment: "Штанга или гантели" },
                { name: "Тяга штанги к подбородку узким хватом", equipment: "Штанга" },
                { name: "Жим в Смит машине", equipment: "Смит машина" },
                { name: "Протяжка в кабеле", equipment: "Кабельный тренажер" }
            ],
            "Плечи (трапеции)": [
                { name: "Шраги со штангой", equipment: "Штанга" },
                { name: "Шраги с гантелями", equipment: "Гантели" },
                { name: "Шраги в Смит машине", equipment: "Смит машина" },
                { name: "Шраги в тренажере", equipment: "Тренажер для шраг" }
            ],
            "Бицепс": [
                { name: "Подъем штанги на бицепс", equipment: "Штанга" },
                { name: "Подъем гантелей на бицепс", equipment: "Гантели" },
                { name: "Молот (молотковые сгибания)", equipment: "Гантели" },
                { name: "Сгибания на скамье Скотта", equipment: "Скамья Скотта, штанга/гантели" },
                { name: "Сгибания рук в тренажере", equipment: "Тренажер для бицепса" },
                { name: "Сгибания рук в кабеле", equipment: "Кабельный тренажер" },
                { name: "Концентрированные сгибания", equipment: "Гантели, скамья" },
                { name: "Подтягивания обратным хватом", equipment: "Перекладина" }
            ],
            "Трицепс": [
                { name: "Жим лежа узким хватом", equipment: "Штанга, скамья" },
                { name: "Французский жим лежа", equipment: "Штанга или гантели, скамья" },
                { name: "Французский жим стоя", equipment: "Гантель или штанга" },
                { name: "Разгибания рук в блоке", equipment: "Кабельный тренажер" },
                { name: "Отжимания на брусьях", equipment: "Брусья" },
                { name: "Разгибания с гантелью из-за головы", equipment: "Гантель" },
                { name: "Разгибания рук в тренажере", equipment: "Тренажер для трицепса" },
                { name: "Отжимания с узкой постановкой рук", equipment: "Пол или скамья" },
                { name: "Кикбэки с гантелью", equipment: "Гантели" }
            ],
            "Пресс": [
                { name: "Скручивания на пресс", equipment: "Коврик" },
                { name: "Скручивания в тренажере", equipment: "Тренажер для пресса" },
                { name: "Подъем ног в висе", equipment: "Перекладина или тренажер" },
                { name: "Скручивания в кабеле (молитва)", equipment: "Кабельный тренажер" },
                { name: "Планка", equipment: "Коврик" },
                { name: "Боковая планка", equipment: "Коврик" },
                { name: "Русские скручивания", equipment: "Медбол или гантель" },
                { name: "Дровосек в кабеле", equipment: "Кабельный тренажер" },
                { name: "Подъем ног лежа", equipment: "Скамья" },
                { name: "Велосипед", equipment: "Коврик" },
                { name: "Скручивания на наклонной скамье", equipment: "Наклонная скамья" }
            ],
            "Предплечья": [
                { name: "Сгибания запястий со штангой", equipment: "Штанга, скамья" },
                { name: "Разгибания запястий со штангой", equipment: "Штанга, скамья" },
                { name: "Сгибания запястий с гантелями", equipment: "Гантели, скамья" },
                { name: "Удержание штанги", equipment: "Штанга" }
            ]
        };

        // Templates
        const templates = {
            "День 1": {
                "Грудь": ["Жим штанги лежа", "Жим гантелей на наклонной скамье", "Сведение рук в тренажере (баттерфляй)"],
                "Спина": ["Подтягивания", "Тяга штанги в наклоне", "Тяга горизонтального блока"],
                "Ноги (квадрицепс)": ["Приседания со штангой", "Жим ногами"],
                "Ноги (бицепс бедра)": ["Сгибания ног лежа"],
                "Ноги (икры)": ["Подъем на носки стоя"],
                "Плечи (дельты)": ["Жим гантелей сидя", "Махи гантелями в стороны", "Разведение в наклоне (задняя дельта)"],
                "Бицепс": ["Подъем штанги на бицепс"],
                "Трицепс": ["Разгибания рук в блоке"],
                "Пресс": ["Скручивания в тренажере", "Подъем ног в висе"]
            },
            "День 2": {
                "Грудь": ["Жим в тренажере сидя", "Разведение гантелей лежа", "Кроссовер в блоке"],
                "Спина": ["Тяга верхнего блока широким хватом", "Тяга гантели в наклоне", "Становая тяга", "Шраги со штангой"],
                "Ноги (квадрицепс)": ["Фронтальные приседания", "Гакк-приседания"],
                "Ноги (бицепс бедра)": ["Румынская тяга"],
                "Ноги (икры)": ["Подъем на носки сидя"],
                "Плечи (дельты)": ["Жим штанги стоя (армейский жим)", "Махи в стороны в тренажере", "Обратная бабочка (задняя дельта)"],
                "Бицепс": ["Молот (молотковые сгибания)"],
                "Трицепс": ["Жим лежа узким хватом"],
                "Пресс": ["Скручивания в кабеле (молитва)", "Планка"]
            },
            "День 3": {
                "Грудь": ["Жим гантелей лежа", "Жим на наклонной скамье в тренажере", "Отжимания на брусьях"],
                "Спина": ["Тяга верхнего блока обратным хватом", "Т-гриф тяга", "Пуловер в блоке"],
                "Ноги (квадрицепс)": ["Приседания в Смит машине", "Болгарские сплит-приседания"],
                "Ноги (бицепс бедра)": ["Сгибания ног сидя"],
                "Ноги (ягодицы)": ["Жим ногами (постановка ног высоко)"],
                "Плечи (дельты)": ["Жим в тренажере сидя", "Махи гантелями вперед", "Тяга к подбородку широким хватом"],
                "Плечи (трапеции)": ["Шраги с гантелями"],
                "Бицепс": ["Сгибания на скамье Скотта"],
                "Трицепс": ["Французский жим лежа"],
                "Пресс": ["Дровосек в кабеле", "Русские скручивания", "Боковая планка"]
            }
        };

        const STORAGE_KEYS = {
            history: 'fullbodyWorkoutHistory_v1',
            currentWorkout: 'fullbodyCurrentWorkout_v1',
            meta: 'fullbodyWorkoutMeta_v1',
            customExercises: 'fullbodyCustomExercises_v1'
        };
        const isStorageAvailable = typeof window !== 'undefined' && 'localStorage' in window;

        // State
        let currentWorkout = [];
        let workoutHistory = [];
        let customExercises = [];
        let workoutMeta = {
            title: '',
            notes: ''
        };
        let editingExerciseId = null;
        let sessionWorkoutId = null;
        let isWorkoutPanelCollapsed = false;
        let currentTab = 'exercises';

        // DOM Elements
        const muscleGroupsContainer = document.getElementById('muscle-groups');
        const workoutList = document.getElementById('workout-list');
        const exerciseCount = document.getElementById('exercise-count');
        const workoutDuration = document.getElementById('workout-duration');
        const muscleBalance = document.getElementById('muscle-balance');
        const saveWorkoutBtn = document.getElementById('save-workout-btn');
        const clearWorkoutBtn = document.getElementById('clear-workout-btn');
        const searchInput = document.getElementById('search-input');
        const templatesGrid = document.getElementById('templates-grid');
        const historyList = document.getElementById('history-list');
        const workoutTitleInput = document.getElementById('workout-title');
        const workoutNotesInput = document.getElementById('workout-notes');
        const addCustomExerciseBtn = document.getElementById('add-custom-exercise-btn');
        const muscleGroupOptionsList = document.getElementById('muscle-group-options');
        const exerciseModal = document.getElementById('exercise-modal');
        const exerciseModalTitle = document.getElementById('exercise-modal-title');
        const exerciseModalClose = document.getElementById('exercise-modal-close');
        const exerciseModalCancel = document.getElementById('exercise-modal-cancel');
        const exerciseNameInput = document.getElementById('exercise-name');
        const exerciseMuscleInput = document.getElementById('exercise-muscle');
        const exerciseEquipmentInput = document.getElementById('exercise-equipment');
        const exerciseForm = document.getElementById('exercise-form');
        const sessionView = document.getElementById('session-view');
        const sessionViewTitle = document.getElementById('session-view-title');
        const sessionViewMeta = document.getElementById('session-view-meta');
        const sessionViewExercises = document.getElementById('session-view-exercises');
        const sessionViewClose = document.getElementById('session-view-close');
        const workoutPanel = document.querySelector('.workout-panel');
        const workoutPanelBody = document.getElementById('workout-panel-body');
        const workoutPanelToggle = document.getElementById('workout-panel-toggle');
        const mobileMediaQuery = window.matchMedia('(max-width: 767px)');

        // Initialize App
        function init() {
            hydrateStateFromStorage();
            renderMuscleGroups();
            renderMuscleGroupOptions();
            renderTemplates();
            setupEventListeners();
            updateWorkoutDisplay();
            syncWorkoutMetaInputs();
            renderHistory();
            if (mobileMediaQuery) {
                setWorkoutPanelCollapsed(isMobileView());
                mobileMediaQuery.addEventListener('change', handleViewportChange);
            } else {
                setWorkoutPanelCollapsed(false);
            }
        }

        function hydrateStateFromStorage() {
            if (!isStorageAvailable) {
                return;
            }
            try {
                const storedHistory = localStorage.getItem(STORAGE_KEYS.history);
                const storedWorkout = localStorage.getItem(STORAGE_KEYS.currentWorkout);
                const storedMeta = localStorage.getItem(STORAGE_KEYS.meta);
                const storedCustomExercises = localStorage.getItem(STORAGE_KEYS.customExercises);

                if (storedHistory) {
                    workoutHistory = JSON.parse(storedHistory).map(workout => ({
                        ...workout,
                        completedExerciseIds: Array.isArray(workout.completedExerciseIds)
                            ? workout.completedExerciseIds
                            : []
                    }));
                }

                if (storedWorkout) {
                    currentWorkout = JSON.parse(storedWorkout);
                }

                if (storedMeta) {
                    const parsedMeta = JSON.parse(storedMeta);
                    workoutMeta = {
                        ...workoutMeta,
                        ...parsedMeta
                    };
                }

                if (storedCustomExercises) {
                    const parsedCustom = JSON.parse(storedCustomExercises);
                    customExercises = Array.isArray(parsedCustom) ? parsedCustom : [];
                }
            } catch (error) {
                console.warn('Не удалось загрузить сохраненные тренировки', error);
                workoutHistory = [];
                currentWorkout = [];
                workoutMeta = {
                    title: '',
                    notes: ''
                };
                customExercises = [];
            }
        }

        function persistCurrentWorkoutState() {
            if (!isStorageAvailable) {
                return;
            }
            try {
                localStorage.setItem(STORAGE_KEYS.currentWorkout, JSON.stringify(currentWorkout));
            } catch (error) {
                console.warn('Не удалось сохранить текущую тренировку', error);
            }
        }

        function persistHistoryState() {
            if (!isStorageAvailable) {
                return;
            }
            try {
                localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(workoutHistory));
            } catch (error) {
                console.warn('Не удалось сохранить историю тренировок', error);
            }
        }

        function persistWorkoutMetaState() {
            if (!isStorageAvailable) {
                return;
            }
            try {
                localStorage.setItem(STORAGE_KEYS.meta, JSON.stringify(workoutMeta));
            } catch (error) {
                console.warn('Не удалось сохранить описание тренировки', error);
            }
        }

        function persistCustomExercises() {
            if (!isStorageAvailable) {
                return;
            }
            try {
                localStorage.setItem(STORAGE_KEYS.customExercises, JSON.stringify(customExercises));
            } catch (error) {
                console.warn('Не удалось сохранить пользовательские упражнения', error);
            }
        }

        function syncWorkoutMetaInputs() {
            if (workoutTitleInput) {
                workoutTitleInput.value = workoutMeta.title || '';
            }
            if (workoutNotesInput) {
                workoutNotesInput.value = workoutMeta.notes || '';
            }
        }

        function resetWorkoutMeta() {
            workoutMeta = {
                title: '',
                notes: ''
            };
            syncWorkoutMetaInputs();
            persistWorkoutMetaState();
        }

        function isMobileView() {
            return mobileMediaQuery ? mobileMediaQuery.matches : false;
        }

        function updateWorkoutPanelToggle(collapsed) {
            if (!workoutPanelToggle) return;
            workoutPanelToggle.textContent = collapsed ? 'Развернуть панель' : 'Свернуть панель';
            workoutPanelToggle.setAttribute('aria-expanded', (!collapsed).toString());
        }

        function setWorkoutPanelCollapsed(collapsed) {
            if (!workoutPanel) return;
            if (!isMobileView()) {
                isWorkoutPanelCollapsed = false;
                workoutPanel.classList.remove('workout-panel--collapsed');
                updateWorkoutPanelToggle(false);
                return;
            }
            isWorkoutPanelCollapsed = collapsed;
            workoutPanel.classList.toggle('workout-panel--collapsed', collapsed);
            updateWorkoutPanelToggle(collapsed);
        }

        function toggleWorkoutPanel() {
            if (!isMobileView()) return;
            setWorkoutPanelCollapsed(!isWorkoutPanelCollapsed);
        }

        function handleViewportChange(event) {
            if (event.matches) {
                setWorkoutPanelCollapsed(true);
            } else {
                setWorkoutPanelCollapsed(false);
            }
        }

        function openExerciseModal(exerciseId = null) {
            if (!exerciseModal) return;
            editingExerciseId = exerciseId;
            if (exerciseId) {
                const exercise = customExercises.find(ex => ex.id === exerciseId);
                if (exercise) {
                    exerciseNameInput.value = exercise.name;
                    exerciseMuscleInput.value = exercise.muscleGroup;
                    exerciseEquipmentInput.value = exercise.equipment || '';
                } else {
                    editingExerciseId = null;
                    exerciseForm?.reset();
                }
                exerciseModalTitle.textContent = 'Редактировать упражнение';
            } else {
                exerciseNameInput.value = '';
                exerciseMuscleInput.value = '';
                exerciseEquipmentInput.value = '';
                exerciseModalTitle.textContent = 'Добавить упражнение';
            }
            exerciseModal.classList.add('open');
            exerciseModal.setAttribute('aria-hidden', 'false');
            exerciseNameInput.focus();
        }

        function closeExerciseModal() {
            if (!exerciseModal) return;
            editingExerciseId = null;
            exerciseForm?.reset();
            exerciseModal.classList.remove('open');
            exerciseModal.setAttribute('aria-hidden', 'true');
        }

        function handleExerciseFormSubmit(event) {
            event.preventDefault();
            const name = exerciseNameInput.value.trim();
            const muscleGroupInput = exerciseMuscleInput.value.trim();
            const equipment = exerciseEquipmentInput.value.trim();

            if (!name || !muscleGroupInput) {
                showToast('Заполни название и группу', 'error');
                return;
            }

            const normalizedMuscleGroup = (() => {
                const existing = getAllMuscleGroups().find(group => group.toLowerCase() === muscleGroupInput.toLowerCase());
                return existing || muscleGroupInput;
            })();

            if (editingExerciseId) {
                const idx = customExercises.findIndex(ex => ex.id === editingExerciseId);
                if (idx !== -1) {
                    customExercises[idx] = {
                        ...customExercises[idx],
                        name,
                        muscleGroup: normalizedMuscleGroup,
                        equipment
                    };
                    currentWorkout = currentWorkout.map(exercise => {
                        if (exercise.sourceCustomId === editingExerciseId) {
                            return {
                                ...exercise,
                                name,
                                muscleGroup: normalizedMuscleGroup,
                                equipment
                            };
                        }
                        return exercise;
                    });
                    updateWorkoutDisplay();
                    showToast('Упражнение обновлено', 'success');
                }
            } else {
                const newExercise = {
                    id: Date.now().toString(),
                    name,
                    muscleGroup: normalizedMuscleGroup,
                    equipment
                };
                customExercises.push(newExercise);
                showToast('Упражнение добавлено', 'success');
            }

            persistCustomExercises();
            const currentFilter = searchInput ? searchInput.value : '';
            renderMuscleGroups(currentFilter);
            renderMuscleGroupOptions();
            closeExerciseModal();
        }

        function deleteCustomExercise(id) {
            if (!id) return;
            if (!confirm('Удалить это упражнение?')) return;
            customExercises = customExercises.filter(ex => ex.id !== id);
            persistCustomExercises();
            const currentFilter = searchInput ? searchInput.value : '';
            renderMuscleGroups(currentFilter);
            renderMuscleGroupOptions();
            currentWorkout = currentWorkout.filter(ex => ex.sourceCustomId !== id);
            updateWorkoutDisplay();
            showToast('Упражнение удалено', 'success');
        }

        function getAllMuscleGroups() {
            const groups = new Set(Object.keys(exerciseDatabase));
            customExercises.forEach(exercise => {
                if (exercise.muscleGroup) {
                    groups.add(exercise.muscleGroup);
                }
            });
            return Array.from(groups);
        }

        function renderMuscleGroupOptions() {
            if (!muscleGroupOptionsList) return;
            const options = getAllMuscleGroups()
                .sort((a, b) => a.localeCompare(b, 'ru'))
                .map(group => `<option value="${group}">`)
                .join('');
            muscleGroupOptionsList.innerHTML = options;
        }

        // Render Muscle Groups
        function renderMuscleGroups(filterText = '') {
            muscleGroupsContainer.innerHTML = '';
            
            getAllMuscleGroups().forEach(muscleGroup => {
                const baseExercises = exerciseDatabase[muscleGroup] || [];
                const customGroupExercises = customExercises
                    .filter(ex => ex.muscleGroup === muscleGroup)
                    .map(ex => ({
                        ...ex,
                        isCustom: true,
                        customId: ex.id
                    }));
                const mergedExercises = [
                    ...baseExercises.map(ex => ({ ...ex, isCustom: false })),
                    ...customGroupExercises
                ];
                const filteredExercises = filterText
                    ? mergedExercises.filter(ex => ex.name.toLowerCase().includes(filterText.toLowerCase()))
                    : mergedExercises;

                if (filteredExercises.length === 0 && filterText) return;

                const card = document.createElement('div');
                card.className = 'muscle-group-card';
                const safeMuscleAttr = escapeHtml(muscleGroup);
                const safeMuscleLabel = safeMuscleAttr;
                card.innerHTML = `
                    <div class="muscle-group-header">
                        <div class="muscle-group-info">
                            <h3>${safeMuscleLabel}</h3>
                            <span class="count">${filteredExercises.length} упражнений</span>
                        </div>
                        <div class="expand-icon">▼</div>
                    </div>
                    <div class="exercises-list">
                        ${filteredExercises.map(exercise => {
                            const safeName = escapeHtml(exercise.name);
                            const safeEquipment = escapeHtml(exercise.equipment || 'Без оборудования');
                            const customIdAttr = exercise.isCustom ? `data-custom-id="${escapeHtml(exercise.customId)}"` : '';
                            return `
                            <div class="exercise-item">
                                <div class="exercise-info">
                                    <h4>
                                        ${safeName}
                                        ${exercise.isCustom ? '<span class="custom-exercise-badge">МОЁ</span>' : ''}
                                    </h4>
                                    <div class="equipment">🏋️ ${safeEquipment}</div>
                                </div>
                                <div class="exercise-item-controls">
                                    ${exercise.isCustom ? `
                                        <button class="icon-btn" title="Редактировать" data-action="edit-custom-exercise" data-custom-id="${exercise.customId}">✎</button>
                                        <button class="icon-btn" title="Удалить" data-action="delete-custom-exercise" data-custom-id="${exercise.customId}">🗑</button>
                                    ` : ''}
                                    <button class="add-exercise-btn" data-muscle="${safeMuscleAttr}" data-exercise="${safeName}" data-equipment="${safeEquipment}" ${customIdAttr}>+</button>
                                </div>
                            </div>
                        `;
                        }).join('')}
                    </div>
                `;

                const header = card.querySelector('.muscle-group-header');
                header.addEventListener('click', () => {
                    card.classList.toggle('expanded');
                });

                muscleGroupsContainer.appendChild(card);
            });

            // Add exercise buttons
            muscleGroupsContainer.querySelectorAll('.add-exercise-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    addExerciseToWorkout(
                        btn.dataset.muscle,
                        btn.dataset.exercise,
                        btn.dataset.equipment,
                        btn.dataset.customId || null
                    );
                });
            });
        }

        // Add Exercise to Workout
        function addExerciseToWorkout(muscleGroup, exerciseName, equipment, sourceCustomId = null) {
            const exercise = {
                id: Date.now() + Math.random(),
                muscleGroup,
                name: exerciseName,
                equipment,
                sets: 3,
                reps: 10,
                sourceCustomId: sourceCustomId ? sourceCustomId.toString() : null
            };

            currentWorkout.push(exercise);
            updateWorkoutDisplay();
            showToast('Упражнение добавлено!', 'success');
        }

        // Remove Exercise from Workout
        function removeExerciseFromWorkout(id) {
            currentWorkout = currentWorkout.filter(ex => ex.id !== id);
            updateWorkoutDisplay();
            showToast('Упражнение удалено', 'success');
        }

        // Update Workout Display
        function updateWorkoutDisplay() {
            // Update stats
            exerciseCount.textContent = currentWorkout.length;
            workoutDuration.textContent = currentWorkout.length * 5;

            // Update buttons
            saveWorkoutBtn.disabled = currentWorkout.length === 0;
            clearWorkoutBtn.disabled = currentWorkout.length === 0;

            // Render workout list
            if (currentWorkout.length === 0) {
                workoutList.className = 'workout-list empty';
                workoutList.innerHTML = '';
            } else {
                workoutList.className = 'workout-list';
                workoutList.innerHTML = currentWorkout.map(exercise => `
                    <div class="workout-exercise">
                        <div class="workout-exercise-header">
                            <div class="workout-exercise-info">
                                <h4>${escapeHtml(exercise.name)}</h4>
                                <span class="muscle-tag">${escapeHtml(exercise.muscleGroup)}</span>
                            </div>
                            <button class="remove-exercise-btn" data-id="${exercise.id}">×</button>
                        </div>
                        <div class="workout-exercise-controls">
                            <div class="control-group">
                                <label>Подходы:</label>
                                <input type="number" min="1" max="10" value="${exercise.sets}" data-id="${exercise.id}" data-field="sets">
                            </div>
                            <div class="control-group">
                                <label>Повторы:</label>
                                <input type="number" min="1" max="50" value="${exercise.reps}" data-id="${exercise.id}" data-field="reps">
                            </div>
                        </div>
                    </div>
                `).join('');

                // Add remove listeners
            document.querySelectorAll('.remove-exercise-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        removeExerciseFromWorkout(parseFloat(btn.dataset.id));
                    });
                });

                // Add input listeners
                document.querySelectorAll('.workout-exercise-controls input').forEach(input => {
                    input.addEventListener('change', (e) => {
                        const id = parseFloat(e.target.dataset.id);
                        const field = e.target.dataset.field;
                        const exercise = currentWorkout.find(ex => ex.id === id);
                        if (exercise) {
                            exercise[field] = parseInt(e.target.value);
                            persistCurrentWorkoutState();
                        }
                    });
                });
            }

            // Update muscle balance
            updateMuscleBalance();
            persistCurrentWorkoutState();
        }

        function handleMuscleGroupsClick(event) {
            const editBtn = event.target.closest('[data-action="edit-custom-exercise"]');
            if (editBtn) {
                event.stopPropagation();
                openExerciseModal(editBtn.dataset.customId);
                return;
            }
            const deleteBtn = event.target.closest('[data-action="delete-custom-exercise"]');
            if (deleteBtn) {
                event.stopPropagation();
                deleteCustomExercise(deleteBtn.dataset.customId);
            }
        }

        // Update Muscle Balance
        function updateMuscleBalance() {
            const balance = {};
            currentWorkout.forEach(ex => {
                balance[ex.muscleGroup] = (balance[ex.muscleGroup] || 0) + 1;
            });

            muscleBalance.innerHTML = Object.keys(balance).map(muscle => `
                <div class="muscle-badge">
                    ${muscle}
                    <span class="muscle-badge-count">${balance[muscle]}</span>
                </div>
            `).join('');
        }

        // Save Workout
        function saveWorkout() {
            if (currentWorkout.length === 0) return;

            const title = (workoutMeta.title || '').trim();
            const notes = (workoutMeta.notes || '').trim();
            const workout = {
                id: Date.now(),
                date: new Date().toLocaleDateString('ru-RU', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                title,
                notes,
                exercises: JSON.parse(JSON.stringify(currentWorkout)),
                completedExerciseIds: []
            };

            workoutHistory.unshift(workout);
            persistHistoryState();
            showToast('Тренировка сохранена!', 'success');
            clearWorkout(true);
            renderHistory();
        }

        // Clear Workout
        function clearWorkout(resetMeta = false) {
            currentWorkout = [];
            updateWorkoutDisplay();
            if (resetMeta) {
                resetWorkoutMeta();
            }
        }

        // Load Template
        function loadTemplate(templateName) {
            const template = templates[templateName];
            currentWorkout = [];

            Object.keys(template).forEach(muscleGroup => {
                template[muscleGroup].forEach(exerciseName => {
                    const exercise = exerciseDatabase[muscleGroup]?.find(ex => ex.name === exerciseName);
                    if (exercise) {
                        addExerciseToWorkout(muscleGroup, exercise.name, exercise.equipment);
                    }
                });
            });

            showToast(`Шаблон "${templateName}" загружен!`, 'success');
            switchTab('exercises');
        }

        // Render Templates
        function renderTemplates() {
            templatesGrid.innerHTML = Object.keys(templates).map(templateName => {
                const template = templates[templateName];
                const totalExercises = Object.values(template).reduce((sum, arr) => sum + arr.length, 0);

                return `
                    <div class="template-card">
                        <h3>📋 ${templateName}</h3>
                        <div class="template-exercises">
                            ${Object.keys(template).map(muscleGroup => `
                                <div class="template-group">
                                    <div class="template-group-title">${muscleGroup}</div>
                                    <div class="template-group-exercises">
                                        ${template[muscleGroup].map(ex => `• ${ex}`).join('<br>')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn--primary" onclick="loadTemplate('${templateName}')">Загрузить шаблон (${totalExercises} упр.)</button>
                    </div>
                `;
            }).join('');
        }

        function escapeHtml(text = '') {
            const safeText = String(text);
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            };
            return safeText.replace(/[&<>"']/g, (char) => map[char]);
        }

        function formatNotes(notes = '') {
            if (!notes) return '';
            return escapeHtml(notes).replace(/\n/g, '<br>');
        }

        // Render History
        function renderHistory() {
            if (workoutHistory.length === 0) {
                historyList.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📝</div>
                        <div class="empty-state-text">История тренировок пуста</div>
                    </div>
                `;
                return;
            }

            historyList.innerHTML = workoutHistory.map(workout => {
                const completedCount = workout.completedExerciseIds ? workout.completedExerciseIds.length : 0;
                const progressText = completedCount ? ` • ✅ ${completedCount}/${workout.exercises.length}` : '';
                return `
                <div class="history-card">
                    <div class="history-header">
                        <div>
                            ${workout.title ? `<div class="history-title">🏷️ ${escapeHtml(workout.title)}</div>` : ''}
                            <div class="history-date">📅 ${workout.date}</div>
                            <div class="history-meta">${workout.exercises.length} упражнений • ${workout.exercises.length * 5} мин${progressText}</div>
                        </div>
                        <div class="history-actions">
                            <button class="btn btn--primary btn--small" onclick="openWorkoutSession(${workout.id})">Открыть</button>
                            <button class="btn btn--secondary" onclick="loadWorkoutFromHistory(${workout.id})">Загрузить</button>
                            <button class="btn btn--secondary" onclick="deleteWorkout(${workout.id})">Удалить</button>
                        </div>
                    </div>
                    <div class="history-exercises">
                        ${workout.exercises.map(ex => `
                            <div class="history-exercise">
                                <strong>${escapeHtml(ex.name)}</strong> <span>(${ex.sets}×${ex.reps})</span> - ${escapeHtml(ex.muscleGroup)}
                            </div>
                        `).join('')}
                    </div>
                    ${workout.notes ? `
                        <div class="history-notes">
                            <div class="history-notes-label">🗒️ Заметки</div>
                            <div class="history-notes-text">${formatNotes(workout.notes)}</div>
                        </div>
                    ` : ''}
                </div>
            `;
            }).join('');
        }

        function openWorkoutSession(id) {
            const workout = workoutHistory.find(w => w.id === id);
            if (!workout || !sessionView) return;
            if (!Array.isArray(workout.completedExerciseIds)) {
                workout.completedExerciseIds = [];
            }
            sessionWorkoutId = id;
            const completedCount = workout.completedExerciseIds ? workout.completedExerciseIds.length : 0;
            sessionViewTitle.textContent = workout.title || 'Тренировка';
            sessionViewMeta.textContent = `${workout.date} • ${completedCount}/${workout.exercises.length} выполнено`;
            renderSessionExercises(workout);
            sessionView.classList.add('open');
            sessionView.setAttribute('aria-hidden', 'false');
        }

        function closeWorkoutSession() {
            if (!sessionView) return;
            sessionWorkoutId = null;
            sessionView.classList.remove('open');
            sessionView.setAttribute('aria-hidden', 'true');
        }

        function renderSessionExercises(workout) {
            if (!sessionViewExercises) return;
            if (!workout.exercises || workout.exercises.length === 0) {
                sessionViewExercises.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">🧘</div>
                        <div class="empty-state-text">Нет упражнений для этой тренировки</div>
                    </div>
                `;
                return;
            }
            const completedIds = new Set(workout.completedExerciseIds || []);
            sessionViewExercises.innerHTML = workout.exercises.map(exercise => {
                const isDone = completedIds.has(exercise.id);
                return `
                    <label class="session-exercise ${isDone ? 'completed' : ''}">
                        <input type="checkbox" data-workout-id="${workout.id}" data-exercise-id="${exercise.id}" ${isDone ? 'checked' : ''}>
                        <div class="session-exercise__info">
                            <span class="session-exercise__title">${escapeHtml(exercise.name)}</span>
                            <span class="session-exercise__meta">${escapeHtml(exercise.muscleGroup)} • ${exercise.sets}×${exercise.reps}</span>
                        </div>
                    </label>
                `;
            }).join('');
        }

        function toggleSessionExercise(workoutId, exerciseId, completed) {
            const workout = workoutHistory.find(w => w.id === workoutId);
            if (!workout) return;
            if (!Array.isArray(workout.completedExerciseIds)) {
                workout.completedExerciseIds = [];
            }
            if (completed) {
                if (!workout.completedExerciseIds.includes(exerciseId)) {
                    workout.completedExerciseIds.push(exerciseId);
                }
            } else {
                workout.completedExerciseIds = workout.completedExerciseIds.filter(id => id !== exerciseId);
            }
            persistHistoryState();
            renderHistory();
            if (sessionWorkoutId === workoutId) {
                renderSessionExercises(workout);
                const completedCount = workout.completedExerciseIds.length;
                sessionViewMeta.textContent = `${workout.date} • ${completedCount}/${workout.exercises.length} выполнено`;
            }
        }

        // Load Workout from History
        function loadWorkoutFromHistory(id) {
            const workout = workoutHistory.find(w => w.id === id);
            if (workout) {
                currentWorkout = JSON.parse(JSON.stringify(workout.exercises));
                // Regenerate IDs
                currentWorkout.forEach(ex => {
                    ex.id = Date.now() + Math.random();
                });
                workoutMeta = {
                    title: workout.title || '',
                    notes: workout.notes || ''
                };
                syncWorkoutMetaInputs();
                persistWorkoutMetaState();
                updateWorkoutDisplay();
                showToast('Тренировка загружена!', 'success');
                switchTab('exercises');
            }
        }

        // Delete Workout
        function deleteWorkout(id) {
            workoutHistory = workoutHistory.filter(w => w.id !== id);
            persistHistoryState();
            renderHistory();
            showToast('Тренировка удалена', 'success');
            if (sessionWorkoutId === id) {
                closeWorkoutSession();
            }
        }

        // Switch Tab
        function switchTab(tabName) {
            currentTab = tabName;

            // Update nav tabs
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.tab === tabName);
            });

            // Update tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabName}-tab`).classList.add('active');

            // Render history when switching to it
            if (tabName === 'history') {
                renderHistory();
            }
        }

        // Show Toast
        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.innerHTML = `
                <div class="toast-content">
                    <span class="toast-icon">${type === 'success' ? '✓' : '✗'}</span>
                    <span class="toast-message">${message}</span>
                </div>
            `;
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 3000);
        }

        // Setup Event Listeners
        function setupEventListeners() {
            // Nav tabs
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    switchTab(tab.dataset.tab);
                });
            });

            if (muscleGroupsContainer) {
                muscleGroupsContainer.addEventListener('click', handleMuscleGroupsClick);
            }

            // Search
            searchInput.addEventListener('input', (e) => {
                renderMuscleGroups(e.target.value);
            });

            // Save workout
            saveWorkoutBtn.addEventListener('click', saveWorkout);

            // Clear workout
            clearWorkoutBtn.addEventListener('click', () => {
                if (confirm('Очистить текущую тренировку?')) {
                    clearWorkout(true);
                }
            });

            if (workoutTitleInput) {
                workoutTitleInput.addEventListener('input', (e) => {
                    workoutMeta.title = e.target.value;
                    persistWorkoutMetaState();
                });
            }

            if (workoutNotesInput) {
                workoutNotesInput.addEventListener('input', (e) => {
                    workoutMeta.notes = e.target.value;
                    persistWorkoutMetaState();
                });
            }

            if (addCustomExerciseBtn) {
                addCustomExerciseBtn.addEventListener('click', () => openExerciseModal());
            }

            if (exerciseModalClose) {
                exerciseModalClose.addEventListener('click', closeExerciseModal);
            }

            if (exerciseModalCancel) {
                exerciseModalCancel.addEventListener('click', closeExerciseModal);
            }

            const exerciseModalOverlay = exerciseModal?.querySelector('[data-close-exercise-modal]');
            if (exerciseModalOverlay) {
                exerciseModalOverlay.addEventListener('click', closeExerciseModal);
            }

            if (exerciseForm) {
                exerciseForm.addEventListener('submit', handleExerciseFormSubmit);
            }

            if (sessionViewClose) {
                sessionViewClose.addEventListener('click', closeWorkoutSession);
            }

            const sessionOverlay = sessionView?.querySelector('[data-close-session]');
            if (sessionOverlay) {
                sessionOverlay.addEventListener('click', closeWorkoutSession);
            }

            if (sessionViewExercises) {
                sessionViewExercises.addEventListener('change', (event) => {
                    const checkbox = event.target;
                    if (checkbox.matches('input[type="checkbox"][data-exercise-id]')) {
                        const workoutId = parseInt(checkbox.dataset.workoutId, 10);
                        const exerciseId = parseFloat(checkbox.dataset.exerciseId);
                        if (!Number.isNaN(workoutId) && !Number.isNaN(exerciseId)) {
                            toggleSessionExercise(workoutId, exerciseId, checkbox.checked);
                        }
                    }
                });
            }

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    if (exerciseModal?.classList.contains('open')) {
                        closeExerciseModal();
                    } else if (sessionView?.classList.contains('open')) {
                        closeWorkoutSession();
                    }
                }
            });

            if (workoutPanelToggle) {
                workoutPanelToggle.addEventListener('click', toggleWorkoutPanel);
            }
        }

        // Make functions global for onclick attributes
        window.loadTemplate = loadTemplate;
        window.loadWorkoutFromHistory = loadWorkoutFromHistory;
        window.deleteWorkout = deleteWorkout;
        window.openWorkoutSession = openWorkoutSession;

        // Initialize
        init();
