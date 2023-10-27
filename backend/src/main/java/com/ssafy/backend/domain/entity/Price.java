package com.ssafy.backend.domain.entity;

import lombok.*;

import javax.persistence.*;

import com.sun.istack.NotNull;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Price {
    @Id
    private Long priceId;

    @ManyToOne
    @JoinColumn(name = "treatment_id")
    @NotNull
    private Treatment treatment;

    @ManyToOne
    @JoinColumn(name = "hospital_id")
    @NotNull
    private Hospital hospital;

    @Column(columnDefinition = "integer default 0")
    @NotNull
    private Integer maxPrice;

    @Column(columnDefinition = "integer default 0")
    @NotNull
    private Integer minPrice;
}
