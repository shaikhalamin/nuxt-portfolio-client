<template>
  <section class="mb-3">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h4 class="mb-4 mt-4 text-center">
            <span class="border-bottom-3"
              >Experience - ({{ calculateExperience }}) Years</span
            >
          </h4>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-5 bg-dark">
                  <div
                    id="v-pills-tab"
                    class="nav flex-column nav-pills"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      v-for="(experience, index) in profile.experiences"
                      :key="index"
                      :class="[
                        colors.length > 0 ? `btn-outline-${colors[index]}` : '',
                        experience.date_to ? '' : 'active show',
                      ]"
                      class="mt-2 mb-1 btn btn-sm text-white"
                      role="tab"
                      :href="`#v-pills-${idAndHashGen(experience)}`"
                      :aria-controls="`v-pills-${idAndHashGen(experience)}`"
                      data-toggle="pill"
                      :aria-selected="experience.date_to ? 'true' : 'false'"
                    >
                      <span class="font-14">
                        <b>{{ experience.designation }}</b> -
                        <span class="font-13"
                          ><a
                            class="text-white"
                            target="_blank"
                            :href="`${experience.company_website}`"
                            ><b>{{ experience.company_name }}</b></a
                          ></span
                        >
                        <span class="float-right text-white"
                          ><i
                            class="fa fa-angle-double-right"
                            aria-hidden="true"
                          ></i
                        ></span>
                      </span>
                    </button>
                  </div>
                </div>
                <!-- <div class="col-md-7">
                  <div class="tab-content border-left" id="v-pills-tabContent">
                    @if(isset($profile->experiences) &&
                    $profile->experiences->count() > 0)
                    @foreach($profile->experiences as $key=>$experience)
                    @if($experience)
                    <div
                      class="tab-pane fade {{ $experience->date_to ? '' : 'active show' }}"
                      id="v-pills-{{ strtolower(substr($experience->designation,0,2).substr($experience->company_name,0,3)).md5($experience->designation) }}"
                      role="tabpanel"
                      aria-labelledby="v-pills-{{ strtolower(substr($experience->designation,0,2).substr($experience->company_name,0,3)).md5($experience->designation) }}-tab"
                    >
                      <div class="card">
                        <div
                          class="card-header"
                          style="background-color: rgb(255, 255, 255)"
                        >
                          <h6>
                            <a href="{{ $experience->company_website }}"
                              ><b>{{ $experience->company_name }}</b>
                              <span class="text-dark"
                                >{{ $experience->company_city }} -
                                {{ $experience->company_country }}</span
                              ></a
                            >
                          </h6>
                          <p class="font-15">
                            <span
                              ><b>{{ $experience->designation }} </b></span
                            >
                            |
                            {{ $experience->date_from ? date('F Y',strtotime($experience->date_from)) : '' }}
                            -
                            {{ $experience->date_to ? date('F Y',strtotime($experience->date_to)):'PRESENT' }}
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="font-14 experience-desc">
                            {!! $experience->job_responsibility !!}
                          </div>
                          <ul class="nav justify-content-center">
                            @php $colorArray =
                            ['primary','info','success','warning','info','success','dark','danger'];
                            shuffle($colorArray); @endphp
                            @foreach(explode(',',$experience->work_stack) as
                            $key=>$stack)
                            <li class="nav-item mr-1">
                              <p class="font-13">
                                <b
                                  ><span
                                    class="badge badge-{{ isset($colorArray[$key]) ? $colorArray[$key] : $colorArray[0] }}"
                                    >{{ $stack }}</span
                                  ></b
                                >
                              </p>
                            </li>
                            @endforeach
                          </ul>
                        </div>
                      </div>
                    </div>
                    @endif @endforeach @endif
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import md5 from 'md5'
import { calculateTotalYear } from '~/helpers/helpers.js'
export default {
  data() {
    return {
      colors: ['primary', 'success', 'info'],
    }
  },
  computed: {
    ...mapGetters({
      profile: 'getProfile',
    }),
    calculateExperience() {
      return calculateTotalYear(this.profile.experiences)
    },
  },
  methods: {
    randomString(str) {
      return md5(str)
    },
    idAndHashGen(experience) {
      const experienceHash = `${experience.designation
        .substr(0, 3)
        .toLowerCase()}`
      const companyHash = `${experience.company_name
        .substr(0, 3)
        .toLowerCase()}`
      const designationHash = this.randomString(experience.designation)
      return `${experienceHash}
                        ${companyHash}${designationHash}`
    },
  },
}
</script>

<style scoped>
.font-13 {
  font-size: 13px;
}
.border-bottom-3 {
  border-bottom: 3px solid #17a2b8;
}
.font-16 {
  font-size: 16px;
}
.border-left {
  border-left: 1px solid #dee2e6 !important;
}
</style>
